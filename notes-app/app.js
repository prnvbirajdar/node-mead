const { argv } = require('yargs');
const yargs = require('yargs');

//  const chalk = require('chalk')

// const getNotes = require('./notes.js')

// const notes = getNotes()

// console.log(notes);


//console.log(chalk.green('Hello world'));


// YARGS COMMAND 

// Add

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('notes title: ', argv.title);
        console.log('notes body: ', argv.body);

    }
})

// Remove

yargs.command({
    command: 'remove',
    describe: 'Removes an existing note',
    handler: function () {
        console.log('note removed');
    }
})


// List

yargs.command({
    command: 'list',
    describe: 'Lists all existing notes',
    handler: function () {
        console.log('notes list');
    }
})


// Read

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('note read');
    }
})



yargs.parse()

// CREATING FILE, WRITING, AND APPENDING STUFF TO TEXT DOC

// const fs = require('fs')
// fs.writeFileSync('notes.txt', "added again")
// fs.appendFileSync('notes.txt', "more stull appended")