const path = require('path')
const express = require('express')

const app = express()

console.log(__dirname);

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

// app.get('/help', (req, res)=>{
//     res.send('hello express')
// })

// app.get('/about', (req, res)=>{
//     res.send('about')
// })

app.get('/weather', (req, res)=>{
    res.send('weather')
})

app.listen(3000, ()=>{
    console.log('server running');
})