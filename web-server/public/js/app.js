console.log('hi from js folder');

const weatherForm = document.querySelector('form')
const weatherInput = document.querySelector('input')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let location = weatherInput.value

    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
        response.json().then(({error, forecast, place} = {})=>{
            if(error){
                return console.log(error);
            }
            return console.log(place, forecast);
        })
    })

    weatherInput.value = ''
    
})