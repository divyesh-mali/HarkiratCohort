// Here, we're passing the function 'main' as a callback to the function 'waitFor3Sec' but it doesnt directly reach the setTimeout function. Its value is first assigned to the variable 'resolve'. 
// 'resolve' is a function that is passed to the 'setTimeout' function. So, when the timer expires, it calls the 'resolve' function which in turn calls the 'main' function.

function waitFor3Sec(resolve) {
    // console.log(resolve); // Output : [Function: main]
    setTimeout(resolve, 3000);
}

function main() {
    console.log("Main is called");
}

waitFor3Sec(main); // 3 seconds


// ----------------------------------------------------------------
// This is one way to write the program above where we directly call 'main' function via setTimeout.

/*
function main() {
    console.log("Main is called");
}

setTimeout(main, 3000);
*/