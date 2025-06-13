/** Que: Write code that 
1. logs "hi" after 1 second,
2. logs "Hello" after 3 seconds after step 1
3. logs "Hello there" after 5 seconds after step 2
*/

// --------------------------------------------

/*
setTimout(callback, 1000);

Instead of passing 'callback' as a parameter, we can use an anonymous function directly, as we have done it below

function callback() {
    console.log('Hi');
}
*/

setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
        console.log("Hello");
        setTimeout(function () { 
            console.log("Hello there");
        }, 5000);
    }, 3000);
}, 1000);

console.log("Outside the callback hell");






// -----------------------------------
// CALLBACK HELL FIX 1 
// -----------------------------------

/*
This is a normal way to fix callback hell by simply avoiding nested callbacks.
At bottom most part of code, we've we've solved callback hell by using named promises & `function chaining`
*/

function step3Done() {
    console.log("Hello there");
}

function step2Done() {
    console.log("Hello");
    setTimeout(step3Done, 5000);
}


function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);




// -----------------------------------
// CALLBACK HELL FIX 2
// -----------------------------------

/**
 * This is a promisified wau of fixing callback hell. Here we using the concept of chaining promises.
 */

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

// Promise chaining
setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000)
}).then(function () {
    console.log("Hello");
    return setTimeoutPromisified(5000);
}).then(function () {
    console.log("Hi there");
}); 

// Another example of chaining
// eg : 
// sortedString = str1.split("s").sort().join("").toLowerCase();
// asd -> ["a", "s", "d"] -> ["a", "d", "s"] -> "ads"