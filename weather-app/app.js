const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=929a841bc224bcc9ba501da9ce8281d9&query=37.8267,-122.4233'

request({url: url, json: true}, (error, response)=>{
    if(error){
        console.log('Unable to connect to the API');
    } else if (response.body.error){
        console.log('Cannot find weather of the location');
    } else{
        console.log(response.body.current.temperature);
    }


})


const locationURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNWx4d216Mjk4ZzJwbzMxYzE1MGY2OSJ9.ZC2jB_23iHamKQ6f9wXzTQ&limit=1"

request({url: locationURL, json: true}, (error, response)=>{
    console.log(response.body.features);
    console.log('lat', response.body.features[0].center[1]);
    console.log('long', response.body.features[0].center[0]);

})