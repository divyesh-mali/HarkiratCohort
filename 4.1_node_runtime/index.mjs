// We've created index.mjs file instead of index.js in order to make it compatible with 'chalk' external library using `npm install chalk`

// Run using command : `node --experimental-modules index.mjs`

import chalk from 'chalk'; // modern import syntax

console.log(chalk.blue('Hello, world!')); // Using chalk to print text in blue color
console.log(chalk.red.bold('This is an error message!')); // Using chalk to print text in red color and bold
console.log(chalk.green.underline('This is a success message!')); // Using chalk to print text in green color with underline