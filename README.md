# Humly device API testing page

index.html page is used to test device API functionality when this page is displayed in URL signage mode. Through this page, the user should be able to read and change LED's color. Functionality for reading device settings is also implemented. Changing device settings is only limited to changing time zone. A basic example for using a device NFC (RFID) scanner is also implemented in the index.html file. In order to test RFID scan functionality simple Accept RFID server should be run by executing the `node acceptRfidServer.js` file. The server will be started on the 8088 port. URL of the RFID scan command should be changed to include the IP address of the computer running Accept RFID server.

👉 **Important!** In URL signage mode you should not use Device API to change time zone. Device time zone should be configured through settings in Humly Control Panel.
