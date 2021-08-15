const yargs = require('yargs');
const {addNote, removeNote, listNotes,readNote} = require('./notes.js')

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
    handler(argv) {
        addNote(argv.title, argv.body)
    }
})

// Remove

yargs.command({
    command: 'remove',
    describe: 'Removes an existing note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
})


// List

yargs.command({
    command: 'list',
    describe: 'Lists all existing notes',
    handler(argv) {
        listNotes(argv.title)
    }
})


// Find

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
})



yargs.parse()

// CREATING FILE, WRITING, AND APPENDING STUFF TO TEXT DOC

// const fs = require('fs')
// fs.writeFileSync('notes.txt', "added again")
// fs.appendFileSync('notes.txt', "more stull appended")