const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=929a841bc224bcc9ba501da9ce8281d9&query=37.8267,-122.4233'

request({url: url}, (error, response)=>{
    const respObj = JSON.parse(response.body)
    console.log(respObj.current.temperature);
})