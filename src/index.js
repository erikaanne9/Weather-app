function showCurrentCityAndTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#big-temp");
  temp.innerHTML = `${temperature}°F`;
  let city = document.querySelector(".current-conditions");
  let location = response.data.name;
  city.innerHTML = `${location} Weather Conditions`;
}

// CODE FOR SEARCH BUTTON -- START

function search(event) {
  event.preventDefault();
  let location = document.querySelector("#search-input");
  let apiKey = "b1b855fb121f5178057b1006a42c2d0b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}&units=imperial`;

  axios.get(`${apiUrl}`).then(showCurrentCityAndTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// CODE FOR SEARCH BUTTON -- END

// CODE FOR CURRENT BUTTON -- START

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "b1b855fb121f5178057b1006a42c2d0b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(`${apiUrl}`).then(showCurrentCityAndTemperature);
}

function getCurrentTemp(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentTemp);

// CODE FOR CURRENT BUTTON -- END

// Day and time
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minute = date.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let dateTime = document.querySelector(".date-time");
dateTime.innerHTML = `${day} ${hour}:${minute}`;
