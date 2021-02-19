/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=c06e9e33171903257c4e27e67824afc5';
let dataOut = document.getElementById('date')
let tempOut = document.getElementById('temp')
let contentOut = document.getElementById('content')


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Call the API
document.getElementById('generate').addEventListener('click', performAction);


// Helper Function 
const getWeather = async (baseURL, newWeather, key) => {

  const res = await fetch(baseURL + newWeather + key)
  try {
    const data = await res.json();
    tempOut.innerHTML = data.main.temp;

    // console.log(data);
    // console.log(data.main.temp);
    // return data;
  } catch (error) {
    // console.log("error", error);
  }
}

function getContent() {
  contentOut.innerHTML = document.getElementById('feelings').value
}
function getData() {
  dataOut.innerHTML = newDate
}


// Main Function

function performAction(e) {
  const newWeather = document.getElementById('zip').value;
  getWeather(baseURL, newWeather, apiKey)
  getContent()
  getData()
}

