This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

There is a frontend and there is a backend. Backend is simply "json-server" with mocked data.

In the project directory, you need to run both frontend and backend in different terminals:

### `npm start`

Runs the Frontend app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### `json-server --watch db.json --port 7896`
It starts the backend with mocked data that is present in db.json file.


There is a "404 Not Found" page for accessing any resource paths which doesnot exists.

The UI is completely mobile responsive first using media queries and then targeting tablets or bigger screens.
Images and typography are completely responsive and use of "rem", "vw", "vh" and "%" is used and "px" use is minimised as and where it could be minimised.
