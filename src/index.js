
const userInput = document.querySelector('.searchbar')
const inputBtn = document.querySelector('button')

const weatherInformation = (() => {

    const getWeather = (city) => {fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=da147e72e31a188c11a8c46352094705`, {mode: 'cors'})
.then((res) => {
    return res.json()
})
.then((data) => {
    let lat = data[0].lat
    let lon = data[0].lon
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da147e72e31a188c11a8c46352094705&units=metric`, {mode: 'cors'})
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        const cityName = document.querySelector('.city')
        if (data.name === 'Downtown Toronto') {
            cityName.innerText = 'Toronto'
        } else {
            cityName.innerText = data.name
        }
        const temperature = document.querySelector('.temp')
        temperature.innerText = `${data.main.temp}℃`
        const feelsLike = document.querySelector('.feels-like')
        feelsLike.innerText = `Feels Like: ${data.main.feels_like}℃`
        const humidity = document.querySelector('.humidity')
        humidity.innerText = `Humidity: ${data.main.humidity}%`
        const windSpeed = document.querySelector('.wind')
        windSpeed.innerText = `Wind: ${data.wind.speed}km/h`
    })
})}



return {getWeather}

})()




inputBtn.addEventListener('click', (e) => {
    weatherInformation.getWeather(userInput.value)
})

window.addEventListener('load', (e) => {
    weatherInformation.getWeather('Hamilton')
})


