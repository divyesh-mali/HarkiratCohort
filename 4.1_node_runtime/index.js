/** 
 * ASSIGNMENT 1 :-
 * Create a command line interface that lets a user specify a filepath and nodejs process counts the number of lines inside it.
 * 
 * Input - node index.js /Users/kirat/file.txt
 * Output - You have 10 lines in this file
 * 
 * Use library : https://www.npmjs.com/package/commander
*/


const fs = require('fs');
const {command} = require('commander')
const program = new Command()

program
    .name('Counter')
    .description('CLI program to count the number of lines in a file')
    .version('0.8.0')

program
    .description('Command to calculate number of lines in a file')
    .argument('<file>', 'File to count lines in')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
            } else {
                const lines = data.split('\n').length;
                console.log(`You have ${lines} lines in the ${file}`);
            }
        })
    })

program.parse();























// -------------------MY--CODE--------------------

/*
import {Command} from 'commander';
const program = new Command();

program
    .name('Word Counter')
    .description('CLI program to count the number of words in a file')
    .version('1.0.0')

program
    .command('count')
    .description('Command to calculate number of words in a file')
    .argument('<filepath>', 'Required argument')
    .option('--words')
    .action((filepath) => {
        const fs = require('fs');
        const path = require('path');

        // const filepath = program.args[0];

        if (!filepath) {
            console.error('Please provide a file path.');
            process.exit(1);
        }

        fs.readFile(path.resolve(filepath), 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                process.exit(1);
            }

            const words = data.split(/\s+/).filter(word => word.length > 0);
            console.log(`You have ${words.length} words in this file.`);
        });
    })
*/