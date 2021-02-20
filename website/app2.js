/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=c06e9e33171903257c4e27e67824afc5';
let dataOut = document.getElementById('date');
let tempOut = document.getElementById('temp');
let contentOut = document.getElementById('content');
let tempUnit = document.getElementById('temp-unit');
let feeling = document.getElementById('feelings').value;

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

// Connect With API To Get Temp 
const getTemp = async (baseURL, newWeather, key) => {
  const res = await fetch(baseURL + newWeather + key)
  try {
    const data = await res.json();
    let tempWithUnit = data.main.temp;
    if (tempUnit.value == 2) {
      tempWithUnit = round10(tempWithUnit - 273.15, 2);
    }
    else {
      tempWithUnit = tempWithUnit;
    }
    // console.log(data);
    // console.log(data.main.temp);
    return data;
  } catch (error) {
    // console.log("error", error);
    tempOut.innerHTML = `There is No Country With This Zipcode `
  }
}



// Main Function
function performAction(e) {
  const newWeather = document.getElementById('zip').value;

  getWeather('/projectData')
    .then(function (data) {
      console.log(data)
      postData('/addWeather', { dataOut: newDate, tempOut: data.tempWithUnit, contentOut: feeling[0] })
    });

  updateUI();

  getTemp(baseURL, newWeather, apiKey)
  // sendDataFun()
};

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
const getWeather = async (url = '') => {
  const res = await fetch(url);
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
    dataOut.innerHTML = newDate;
    tempOut.innerHTML = tempWithUnit;
    contentOut.innerHTML = feelings;
  }
  catch (error) {
    console.log('error', error)
  }
}
