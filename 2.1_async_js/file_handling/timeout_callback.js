function timeoutCallback() {
  console.log("Timeout callback function executed after 10 seconds");
}

console.log('Hii');

setTimeout(timeoutCallback, 10000); // 10 seconds

console.log('Welcome to loupe.');

let c = 0;
//This loop will take around 3-4 seconds to complete
for (let i = 0; i < 1000000000; i++) {
  c++;
}

console.log('Expensive Loop completed.');

/** 
  Option 1: (Correct)
  Hii
  Welcome to loupe.
  Expensive Loop completed.
  Timeout callback function executed after 10 seconds

  Option 2: (Incorrect)
  Hii
  Timeout callback function executed after 10 seconds
  Welcome to loupe.
  Expensive Loop completed.
*/
