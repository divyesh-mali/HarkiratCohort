/** Que: Write code that 
1. logs "hi" after 1 second,
2. logs "Hello" after 3 seconds after step 1
3. logs "Hello there" after 5 seconds after step 2
*/

// This is a solution using `async/await` to avoid callback hell and make the code cleaner and more readable.

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    
    await setTimeoutPromisified(3000);
    console.log("Hello");
    
    await setTimeoutPromisified(5000);
    console.log("Hello there");
}

solve();

console.log("After solve function...");