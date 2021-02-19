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


// GET route
app.get('/all', sendData);

function sendData(request, response) {
  response.send(projectData);
};

/* -----------------------------------------------------------------------------
- The POST route should anticipate receiving three pieces of data from the request body
    -- temperature
    -- date
    -- user response 
- Make sure your POST route is setup to add each of these values with a key to projectData
-----------------------------------------------------------------------------*/

// POST route
app.post('/add', callBack);

function callBack(req, res) {
  res.send('POST received');
}

/* -----------------------------------------------------------------------------
Num 3 ,4
https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/1eceea63-19e5-4599-b40a-b872653de4a6/concepts/58e551fe-9a86-4f82-89bc-ab737f5a399e
-----------------------------------------------------------------------------*/
