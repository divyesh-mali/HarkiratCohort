// Its necessary that you understand the concept of passing functions as arguments to other functions. This will help you understand the concept of callbacks and promises. Which is further used in async programming.

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function doOperation(a, b, operation) {
    let val = operation(a, b);
    return val;
}

const ans = doOperation(10, 5, sum);
console.log(ans); // 15

