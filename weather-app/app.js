const request = require('postman-request')
const  geocodeFunc = require('./utils/geocodeFunc.js')
const weatherFunc = require('./utils/weatherFunc')

geocodeFunc('st. louis', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})

weatherFunc('38.63','38.63', (error, data)=> {
    console.log('Error', error);
    console.log('Data', data);
} )