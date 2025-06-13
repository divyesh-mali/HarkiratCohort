/** 
 * ASSIGNMENT 2 :-
 * Create a command line interface that lets a user specify a filepath and nodejs process counts the number of words inside it.
 * 
 * Input - node index.js /Users/kirat/file.txt
 * Output - You have 10 words in this file
 * 
 * Use library : https://www.npmjs.com/package/commander
*/





// Run : 
// PS D:\HarkiratCohort\4.1_node_runtime> node index2.js count-words readme.md
// PS D:\HarkiratCohort\4.1_node_runtime> wordscli count-lines \HarkiratCohort\4.1_node_runtime\readme.md
// PS D:\HarkiratCohort\4.1_node_runtime> alias worldcli="node index2.js"
// PS D:\HarkiratCohort\4.1_node_runtime> wordldcli -h
// PS D:\HarkiratCohort\4.1_node_runtime> worldcli count-lines \path\to\txt\file

const fs = require('fs')
const { Command } = require('commander')
const program = new Command()

function main(fileName) {
    program
        .name('File related CLI')
        .description('CLI to do file based tasks')
        .version('0.8.0')

    program
        .command('count-words')
        .description('Count number of words in a file')
        .argument('<file>', 'file to count')
        .action((file) => {
            fs.readFile(file, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let words = 0;
                    for (let i = 0; i <= data.length; i++) {
                        if (data[i] === " ") {
                            words++;
                        }
                    }
                    console.log(`There are ${words+1} words in ${file}`)
                }
            })
        })

    program
        .command('count-lines')
        .description('Count number of lines in a file')
        .argument('<file>', 'file to count')
        .action((file) => {
            fs.readFile(file, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let lines = 0;
                    for (let i = 0; i <= data.length; i++) {
                        if (data[i] === "\n") {
                            lines++;
                        }
                    }
                    console.log(`There are ${lines+1} lines in ${file}`)
                }
            })
        })
    
    program.parse()
}

main(process.argv[2]); // process.argv[2] will give the file path from command line arguments

// Actually, process.argv is an array that contains the command line arguments passed to the Node.js process while we type the command in the CLI
