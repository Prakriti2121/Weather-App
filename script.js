const apikey = "10883cb162dd4e84350b8f194549abd9";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=kathmandu";


async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
}