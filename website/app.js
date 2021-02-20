/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=c06e9e33171903257c4e27e67824afc5';
let tempUnit = document.getElementById('temp-unit');
let temperature;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Call the API
document.getElementById('generate').addEventListener('click', performAction);


// Helper Function 
function round10(number, precision) {
  var factor = Math.pow(10, precision);
  var tempNumber = number * factor;
  var roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
};

// Main Function
function performAction(e) {
  const newWeather = document.getElementById('zip').value;
  const feeling = document.getElementById('feelings').value;

  getWeather(baseURL, newWeather, apiKey)
    .then(function (data) {
      console.log(data)
      postData('/addWeather', { dataOut: newDate, tempOut: data.main.temp, contentOut: feeling })
      // getTemp(baseURL, newWeather, apiKey);     // sendDataFun()
      updateUI();
    });
};

// Connect With API To Get Temp 
const getTemp = async (baseURL, newWeather, apiKey) => {
  const res = await fetch(baseURL + newWeather + apiKey)
  try {
    const data = await res.json();
    let tempWithUnit = data.main.temp;
    if (tempUnit.value == 2) {
      tempWithUnit = round10(tempWithUnit - 273.15, 2);
    }
    else {
      tempWithUnit = tempWithUnit;
    }
    temperature = tempWithUnit;
    // console.log(data);
    // console.log(data.main.temp);
    // return data;
  } catch (error) {
    // console.log("error", error);
    tempOut.innerHTML = `There is No Country With This Zipcode `
  }
}

// Async POST
const postData = async (url = '', data = {}) => {

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  try {
    const newData = await response.json();
    return newData
  } catch (error) {
    console.log("error", error);
  }
}


// Async GET
const getWeather = async (baseUrl, newZip, apiKey) => {
  const res = await fetch(baseUrl + newZip + apiKey);
  try {
    // Transform into JSON
    const data = await res.json();
    console.log(data);
    return data;
  }
  catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}


const updateUI = async () => {

  const request = await fetch('/all');
  try {
    const allData = await request.json()
    console.log(allData);
    document.getElementById('date').innerHTML = allData[0].dataOut;
    document.getElementById('temp').innerHTML = allData[0].tempOut;
    document.getElementById('content').innerHTML = allData[0].contentOut;
  }
  catch (error) {
    console.log('error', error)
  }
}
