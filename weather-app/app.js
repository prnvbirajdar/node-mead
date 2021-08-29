const  geocodeFunc = require('./utils/geocodeFunc.js')
const weatherFunc = require('./utils/weatherFunc')


const locationName = process.argv[2]

if (!locationName){
  return console.log('provide proper address')
} 

geocodeFunc(process.argv[2], (error, data) => {

    if (error){
        return console.log('Geocode Error', error);
    }

    weatherFunc(data.lat, data.long, (error, forecastData)=> {
        if (error){
            return console.log('Weather Error', error);
        }

        console.log(data.place);
        console.log(forecastData);
    } )

})

