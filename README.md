# Url Shortening Service (USS)

This project provides a platform for users to shorten their long URLs into something simpler.
The frontend of this project is built using ReactJS and vanilla CSS.

For the backend, I used Node.js, together with express, and MongoDB to store the url pairs.
[Backend repo can be found here.](https://github.com/lalalawson/url-shorten-be)

Both frontend and backend have been deployed using Heroku, and the application can be accessed at [https://uss-fe.herokuapp.com/](https://uss-fe.herokuapp.com/)[^1]

[^1]: Depending on when the app is being accessed remotely, heroku might be down (credit overuse or end of free period).

## Accessing the project locally

To run the the project on your local system, Node JS must be installed.
After which, if `yarn` was not previously installed on your system, do run `npm install -g yarn` before running the app.

Once yarn is installed, in the project directory, you can run the following commands in order:

### `yarn`

Initializes and download the node modules required on to your system.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## URL Changes

Currently, the application make requests to the [backend server](https://uss-be.herokuapp.com/), which is denoted as a constant value in `src/constants/global.js`. If ever the backend server is down, and you are running your own backend service, do change the value accordingly. If the backend service being run locally is the one denoted at my [url-shorten-be](https://github.com/lalalawson/url-shorten-be) repo, the value is likely to be `"https://localhost:5050"`
