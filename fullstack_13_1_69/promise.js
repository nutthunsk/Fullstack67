const promise = new Promise((resolve , reject) => {
    const res = false;

    if (res) {
        resolve("The promise was resolved successfully.");
    }
    else {
        reject("Error");
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)