 const apikey = "b337622fb183ba3fe21dd344d1697a9b";
 const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 let cityName = document.querySelector("h2");
 let temp = document.querySelector("h1");
 let humidity = document.querySelector(".hum");
 let wind = document.querySelector(".win");
 let input = document.querySelector("input"); 

 const btn = document.querySelector("button");

 async function getWeather(city){


    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();
    
    if(data.cod == "404"){
        alert("City Not Found");
        return;
    }

    cityName.innerHTML = data.name;
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}km`;


 }

 getWeather("lucknow")

btn.addEventListener("click", () => {

    let value = (document.querySelector(".input-box").value).toLowerCase();
    getWeather(value);
})

input.addEventListener("keyup", (event) => {

    if(event.key === 'Enter' || event.keyCode === 13){
    let value = (document.querySelector(".input-box").value).toLowerCase();
    getWeather(value);
    }
})