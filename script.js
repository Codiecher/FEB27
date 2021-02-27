let api = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "f888d8023f96e32ebff86dfc7eee1df2";
let yourmum = "gay";
let temperatureElement = document.getElementById("temperature");
let statusElement = document.getElementById("status");
let locationElement = document.getElementById("location");

function getWeather(){

   function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    let openWeatherMap = api +
     "?lat=" + latitude +
     "&lon=" + longitude +
     "&appid=" + apiKey;
     document.getElementById('container').style.display = "block";
    fetch(openWeatherMap)
    .then(response => response.json())
    .then(data => {
  	console.log(data);

    let celsius = data.main.temp - 273;

    statusElement.innerHTML = data.weather[0].main; // eg. Clouds, Rain, Sunny, Clear

    temperatureElement.innerHTML = celsius.toFixed(2) + "° C"; // eg. 24.69° C

    locationElement.innerHTML = data.name + " (" + latitude + "°N, " + longitude + "°E)";
// eg. Penang (5.4164°, 100.3327° E)
       })
    }

    function error(e) {
    console.log(e.message)
    }

  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(success, error);
    } else {
    alert('Geolocation is not supported by your browser');
    }
}
