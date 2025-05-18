const fs = require('fs');

function print(err, data) {
    if (err) {
        console.log('Error reading file!!');
        console.log(err);
    } else {
        console.log('Error is : ', err);
        console.log('File read successfully');
        console.log('Data in file: ');
        console.log(data);
    }
}

fs.readFile('a.txt', 'utf8', print); // Reading file asynchronously

fs.readFile('b.txt', 'utf8', print); // Reading file asynchronously

// fs.readFile('randomfile.txt', 'utf8', print); // This will print the error

console.log('This line will get printed first...');
