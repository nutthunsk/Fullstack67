function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run() {

    console.log("Starting...");
    await promiseTimeout(2000);

    const respanse = await longRunningOperation();
    console.log("This is ",respanse);

    console.log("Stop!!");
}

console.log("Before run()");
run();
console.log("After run()");