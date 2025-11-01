
var inputValue = document.querySelector(".search input");
var searchButton = document.querySelector(".search button");
var cityName = document.querySelector(".city");
var tempValue = document.querySelector(".temp");
var humidityValue = document.querySelector(".humidity");
var windValue = document.querySelector(".wind");
var weatherIcon = document.querySelector(".weather-icon");


var API_KEY = "47c885f4c003b93e7980db546861c3b7";

function handleSubmit() {
  var city = inputValue.value.trim();

  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +city +"&appid=" +
    API_KEY + "&units=metric";

  console.log("Fetching:", url);


  axios.get(url).then(function (response) {
      var data = response.data;

      console.log("Success:", data);


      cityName.innerText = data.name;
      tempValue.innerText = Math.round(data.main.temp) + "°C";
      humidityValue.innerText = data.main.humidity + "%";
      windValue.innerText = data.wind.speed + " km/h";


      var weather = data.weather[0].main.toLowerCase();

      if (weather.indexOf("cloud") !== -1) {
        weatherIcon.src = "./Images/clud and sun.png";
      } else if (weather.indexOf("rain") !== -1) {
        weatherIcon.src = "./Images/rain.png";
        } else if (weather.indexOf("clear") !== -1) {
         weatherIcon.src = "./Images/clear.png";
      } else if (weather.indexOf("mist") !== -1) {
        weatherIcon.src = "./Images/mist.png";
         } else if (weather.indexOf("snow") !== -1) {
    weatherIcon.src = "./Images/snow.png";
      } else {
     weatherIcon.src = "./Images/clud and sun.png";
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
      alert("City not found! Please check spelling.");
    });
}

searchButton.onclick = handleSubmit;


inputValue.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSubmit();
  }
});
