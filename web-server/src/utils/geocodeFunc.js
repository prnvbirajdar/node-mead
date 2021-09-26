const request = require('postman-request')

const geocodeFunc = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNWx4d216Mjk4ZzJwbzMxYzE1MGY2OSJ9.ZC2jB_23iHamKQ6f9wXzTQ&limit=1`

    request({url, json: true}, (error, { body })=>{
        if (error){
            callback("Unable to connect", undefined)
        } else if (body.features.length === 0){
            callback("Enter right location", undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                place: body.features[0].place_name
            } )
        }
    })    
}

module.exports = geocodeFunc