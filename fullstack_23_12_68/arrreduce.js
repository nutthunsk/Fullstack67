const array =[15, 16, 17, 18, 19];

const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

console.log(sum)