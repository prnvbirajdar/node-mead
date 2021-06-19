// const fs = require('fs')

const getNotes = require('./notes.js')

const notes = getNotes()

console.log(notes);


// fs.writeFileSync('notes.txt', "added again")

// fs.appendFileSync('notes.txt', "more stull appended")