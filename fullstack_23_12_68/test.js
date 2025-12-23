let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];
let result = []

for (let i = 0; i < values1.length; i++) {
    let allvalues = values1[i];

    if (values2.includes(allvalues) && values3.includes(allvalues)) {
        result.push(allvalues);
    }
}

console.log(result);