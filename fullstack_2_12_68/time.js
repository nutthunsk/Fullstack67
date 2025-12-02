const startTime = Date.now();
function someHeavyTask() {
    for (let i=0; i< 10e7; i++) {
        Math.sqrt(i);
    }
}

someHeavyTask();
const endTime = Date.now();
const duration = endTime - startTime;
console.log(`Time is -${duration}-`)