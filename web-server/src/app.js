const path = require('path')
const express = require('express')

const app = express()

// paths for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// setup handlebars and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)

// serving static directory
app.use(express.static(publicPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'dynamic hbs',
        name: 'Pranav'
    })
})

app.get('/hello', (req, res)=>{
    res.render('hello', {
        title: 'dynamic hbs',
        name: 'Pranav Birajdar'
    })
})

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