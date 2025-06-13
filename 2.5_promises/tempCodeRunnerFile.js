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