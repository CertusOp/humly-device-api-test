const http = require("http");
const port = 8088;

function responseToRequest(request, response) {
    try {
        if (request.url.includes("/accept-rfid-scan")) {
            let requestData = "";

            request.on("data", chunk => {
                requestData += chunk;
            });
            request.on("end", () => {
                console.log(`ACCEPTED DATA FROM RFID SCAN: ${JSON.stringify(JSON.parse(requestData))}`);

                response.writeHead(200, getHeaders("application/json"));
                response.write(JSON.stringify({
                    success: true
                }));
                response.end();
            });
        } else {
            response.writeHead(400);
            response.end();
        }
    } catch (error) {
        response.writeHead(500);
        response.end(error.message);
    }
}

function getHeaders(contentType = "") {
    return {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": ["GET", "POST"],
        "Access-Control-Max-Age": 2592000, // 30 days
    };
}

http.createServer(function(request, response) {
    responseToRequest(request, response);
}).listen(port);

console.log(`Accept RFID http server started at port ${port}!`);
