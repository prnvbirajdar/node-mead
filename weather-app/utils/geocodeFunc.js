const request = require('postman-request')

const geocodeFunc = (location, callback) => {
    const locationURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNWx4d216Mjk4ZzJwbzMxYzE1MGY2OSJ9.ZC2jB_23iHamKQ6f9wXzTQ&limit=1`

    request({url: locationURL, json: true}, (error, response)=>{
        if (error){
            callback("Unable to connect", undefined)
        } else if (response.body.features.length === 0){
            callback("Enter right location", undefined)
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[1],
                long: response.body.features[0].center[0],
                place: response.body.features[0].place_name
            } )
            console.log('lat', response.body.features[0].center[1]);
            console.log('long', response.body.features[0].center[0]);
        }
    })    
}

module.exports = geocodeFunc