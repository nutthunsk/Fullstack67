function criticalCode() {
    throw "throwing an error";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n****** Try Catch Demo *****\n");

try {
    criticalCode();
} catch (ex) {
    console.log("got an error");
    logError(ex);
}

console.log("\n****** End Try Catch Demo *****\n");

try {
    throw "throwing another error";
} catch(ex) {
    console.log("\n****** Another Try Catch Demo *****\n");
    logError(ex);
}

console.log("\n****** End Another Try Catch Demo *****\n");

try {
    criticalCode();
} catch (ex) {
    console.log("got an error");
    logError(ex);
} finally {
    console.log("Code that always will run");
}

function hello() {
    console.log("Hello from hello function");
}