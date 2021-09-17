const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// paths for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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

app.get('/blog', (req, res)=>{
    res.render('blog', {
        title: 'blog title',
        name: 'Pranav Birajdar'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
       return res.send({
            error: "error, no address"
        })
    }
    res.send({
        message: "weather data",
        address: req.query.address
    })
})


// 404 pages

app.get('/blog/*', (req, res)=> {
    res.render('404', {
        message: 'blog article not found',
        title: 'blog 404 page',
        name: 'Pranav Birajdar'
    })
})

app.get('*', (req, res)=> {
    res.render('404', {
        message: 'page not found',
        title: '404 page',
        name: 'Pranav Birajdar'
    })
})

app.listen(3000, ()=>{
    console.log('server running');
})