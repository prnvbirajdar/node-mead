const request = require('postman-request')

const weatherFunc = (lat, long, callback) => {
 const url = `http://api.weatherstack.com/current?access_key=929a841bc224bcc9ba501da9ce8281d9&query=${lat},${long}`

 request({url, json: true}, (error, { body })=>{
    if(error){
        callback('Unable to connect to the API', undefined)
    } else if (body.error){
        callback('Cannot find weather of the location', undefined)
    } else{
        callback(undefined, body.current.temperature)
    }
})
}

module.exports = weatherFunc



