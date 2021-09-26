console.log('hi from js folder');

fetch('http://localhost:3000/weather?address=boston').then(response => {
    response.json().then(({error, forecast, place} = {})=>{
        if(error){
            return console.log(error);
        }
        return console.log(place, forecast);
    })
})