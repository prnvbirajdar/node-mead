const fs = require('fs')

fs.writeFileSync('notes.txt', "added again")

fs.appendFileSync('notes.txt', "more stull appended")