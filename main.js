const url = 'https//api.openweathermap.org/data/2.5/'
const key = '1d6dacf7c11dfce27bcb9fd5e397ee3d'

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = '${url}weather?q=${cityName}&appid=${key}&units=metric&land=tr'
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)

        
}
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = ' ${result.name } , ${ result.sys.country}'

    let temp = document.querySelector('.temp')
    city.innerText = '${Math.round(result.main.temp)}°C'
    
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = ' ${Math.round(result.main.temp_min)} °c /  ${Math.round(result.main.temp_max)} '
}
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)
