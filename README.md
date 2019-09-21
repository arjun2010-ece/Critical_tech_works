This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project was done in ReactJS javascript library and first thing first that needs to be done is installing the dependencies of npm.


## Available Scripts

There is a frontend and there is a backend. Backend is simply "json-server" with mocked data.

In the project directory, you need to run both frontend and backend in different terminals:

But first thing first installing the dependencies. In the project folder fire the command::
### npm install
 It will install everything required to work with the project.

In one terminal start the FRONTEND::
====================================
Command is::
### `npm start`

Runs the Frontend app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



In one terminal start the BACKEND::
====================================
Command is::
### `json-server --watch db.json --port 7896`
It starts the backend with mocked data that is present in db.json file.


There is a "404 Not Found" page for accessing any resource paths which doesnot exists.

The UI is completely mobile responsive first using media queries and then targeting tablets or bigger screens.
Images and typography are completely responsive and use of "rem", "vw", "vh" and "%" is used and "px" use is minimised as and where it could be minimised.
