/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=c06e9e33171903257c4e27e67824afc5';
let tempUnit = document.getElementById('temp-unit');
let temperature;
let feeling ;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Call the API
document.getElementById('generate').addEventListener('click', performAction);


// Helper Function 
function round10(number, precision) {
  let factor = Math.pow(10, precision);
  let tempNumber = number * factor;
  let roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
};

// Main Function
function performAction(e) {
  const newWeather = document.getElementById('zip').value;
  feeling = document.getElementById('feelings').value;

  getWeather(baseURL, newWeather, apiKey)
    .then(function (data) {
      postData('/addWeather', { dataOut: newDate, tempOut: temperature, contentOut: feeling })
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
    let tempWithUnit = data.main.temp;
    if (tempUnit.value == 2) {
      tempWithUnit = round10(tempWithUnit - 273.15, 2);
    }
    else {
      tempWithUnit = tempWithUnit;
    }
    temperature = tempWithUnit;
    // console.log(data);
    // return data;
  }
  catch (error) {
    // console.log("error", error);
    tempOut.innerHTML = `There is No Country With This Zipcode `
    // appropriately handle the error
  }
}


const updateUI = async () => {

  const request = await fetch('/all');
  try {
    const allData = await request.json()
    console.log(allData);
    document.getElementById('date').innerHTML = newDate;
    document.getElementById('temp').innerHTML = temperature;
    document.getElementById('content').innerHTML = feeling;
  }
  catch (error) {
    console.log('error', error)
  }
}
