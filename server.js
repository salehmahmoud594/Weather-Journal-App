// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');

// Start up an instance of app

const app = express();
/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
const server = app.listen(port, listening);
function listening() {
  console.log(`Running on localhost: ${port}`);
};

// -----------------
const fakeData = {
  dateOut: 'Data',
  tempOut: 'Temp',
  contentOut: 'Feeling'
}
// -----------------
app.get('/fakeWeatherData', getFakeData)
function getFakeData(req, res) {
  res.send(fakeData)
}
// -----------------
const weatherData = []
// GET route
app.get('/all', getData);
function getData(req, res) {
  res.send(weatherData);
  console.log(weatherData)
};

// POST route
app.post('/addWeather', addWeather);
function addWeather(req, res) {
  console.log(req.body)
  newEntry = {
    dataOut: req.body.dataOut,
    tempOut: req.body.tempOut,
    contentOut: req.body.contentOut
  }
  weatherData.push(newEntry)
  res.send(weatherData);
  console.log(weatherData)
}

// POST an Weather
// const data = [];
// app.post('/Weather', addWeather);
// function addWeather(req, res) {
//   data.push(req.body);
// };


