# Weather-Journal App Project

## Udacity's Second Project ( Web Development Professional )

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## The Project Structure:
  website
    - helper files
      -- css
        ---bootstrap.min.css
        ---bootstrap.min.css.map
      -- js
        ---bootstrap.bundle.js
        ---bootstrap.bundle.js.map
    - index.html
    - style.css
    - app.js
  server.js
  package.json
  package-lock.json
  README.md
  commentsOnlyJS
    - server.js
    - app.js

## Weather-Journal App
  - Node and Express installed on the local machine.
  - The project file server.js require express() ,and created an instance of their app using express.
  - The Express app instance pointed to the project folder with .html, .css, and .js files.
  - The ‘cors’ package installed in the project from the command line, and required in the project file server.js, and the instance of the    app setup to use cors().
  - The body-parser package installed and included in the project.
  - Local server running and producing feedback to the Command Line through a working callback function.
  - Created API credentials on OpenWeatherMap.com
  - JavaScript Object named projectData initiated in the file server.jsto act as the app API endpoint.
  - The personal API Key for OpenWeatherMap API is saved in a named const variable.
  - The API Key variable is passed as a parameter to fetch() .
  - Data is successfully returned from the external API.
  - There are an asynchronous function to fetch the data from the app endpoint
  - The input element with the placeholder property set to “enter zip code here” have an id of zip.
  - The textarea included in project HTML have an id of feelings.
  - The button included in project HTML have an id of generate.
  - The div with the id, entryHolder have three child divs with the ids:
    -- date
    -- temp
    -- content
  - In the file app.js, the element with the id of generate have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.
  - Included in the async function to retrieve that app’s data on the client side, existing DOM elements have their innerHTML properties dynamically set according to data returned by the app route.
