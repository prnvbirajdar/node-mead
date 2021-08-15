const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()

const dataObj = JSON.parse(dataJSON)

dataObj.name = 'Pranav'
dataObj.age = 29

const newData = JSON.stringify(dataObj)

fs.writeFileSync('1-json.json', newData)

console.log(newData);