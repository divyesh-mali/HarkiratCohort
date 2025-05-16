// This is synchronous code i.e. it will execute line by line.
// But in async code, the execution will not be in order.

function sum(a, b) {
    return parseInt(a) + b;
}

let ans = sum("1", 2)
console.log(ans);