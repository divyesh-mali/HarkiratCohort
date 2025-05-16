const fs = require('fs'); // import the file system module

// If we dont define utf8, we will get a buffer object
const data2 = fs.readFile('./b.txt', 'utf8'); // Reading file asynchronously
console.log(data2);

const data1 = fs.readFileSync('./a.txt', 'utf8'); // Reading file synchronously
console.log(data1);
