const a = 5
const b = 10

const add = function(a,b) {
    return a + b
}

const arrowadd = (a,b) => {
    return a + b
}

const arrowsub = (a,b) => {
    const result = a-b
    return a+b
}

console.log(`${add(a,b)}`)
console.log(`${arrowadd(a,b)}`)
console.log(`${arrowsub(a,b)}`)