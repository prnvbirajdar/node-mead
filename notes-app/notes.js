const fs = require('fs')
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNoteTitle = notes.find(note=> note.title === title)

    debugger

    if(!duplicateNoteTitle){
        notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log(chalk.green.inverse('Note added'));  
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteExists = notes.filter(note=> note.title === title)

    if(noteExists.length===0){
        console.log(chalk.red.inverse('No note found'));
    } else{
        const filteredNotes = notes.filter(note=> note.title !== title)
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse('Note removed'));  
    }
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.italic.magenta('Your Notes'));
    notes.forEach(n=> console.log(n.title))
}

const readNote = (title)=>{
    const notes= loadNotes()
    const noteExists = notes.find( note=> note.title === title)

    if (noteExists) {
        console.log(chalk.italic.green(noteExists.title));
        console.log(noteExists.body);
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }

}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    } 
}

module.exports = { addNote, removeNote, listNotes, readNote}