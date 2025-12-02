function createLogEntry(messge) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');
    const eventID = Math.random().toString(16).substring(2, 10).toUpperCase();
    const logMessage = messge.toUpperCase();
    return`[${timestamp}] [${eventID}] - ${logMessage}`;

}
const log = createLogEntry("User login successful");
console.log(log);