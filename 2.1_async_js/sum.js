// Find sum of numbers from 0 to n
function sum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

function optimised_sum(num) {
    return (num * (num + 1)) / 2;
}

console.log(sum(8)); // 36

console.log(optimised_sum(8)); // 36