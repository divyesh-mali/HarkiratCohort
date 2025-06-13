// ms : milliseconds
function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
}

function callback_func() {
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback_func); // 3 seconds