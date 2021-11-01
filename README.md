# Giphy App

![][giphyApp]

The giphy application displays a list of `trending` gifs. 

From the home page the user may use the search bar in order to search for other gifs.

Once a user finds a gif that they like, they can click the `embed` button or the `share` button where a modal will display allowing the user to copy the embed source code or the giphy URL to share the gif.

## Perquisites

In order to run this application you will need the following

- Node
  - To install node run `npm install -g npm`
  - To ensure it is installed run `node -v` and `npm -v`
- Giphy API Key from [Giphy](https://developers.giphy.com/)
  - Visit the giphy URL [Giphy](https://developers.giphy.com/)
  - Click `Get Started` button
  - Click `Create an App`
  - Sign Up and Login
  - Click `Create App` once signed in
  - Select `AIP -> Next Step`
  - Enter App Name e.g. `My First Giphy App`
  - Accept terms and conditions
  - Click create app
  - Your giphy API should be made available to you now.

## Build Steps

- Clone project `git clone git@github.com:bonjo7/giphy-app.git`
- Change directory for the `giphy-app` directory
  - `cd giphy-app`
- Install dependencies `npm install`
- Create a file in the root directory called `.env`
  - In this file create a variable `REACT_APP_GIPHY_API_KEY`
  - Your `.env` file should look like this `REACT_APP_GIPHY_API_KEY=<your_giphy_key>`
- Start app `npm run start`
- App should not be running on port 3000 `http://localhost:3000`

## Testing

Command Line

- To test the application without the cypress UI run the following command from the app route directory `npm run cy:run -- "cypress/integration/usersearch-spec.js"`

Cypress View

- To test the application using the cypress UI run the following command from the app route directory `npm run cypress`
- From the cypress UI click `Tests` and select the desired testing file
  - `usersearch.spec.js`
  - `useshare.spec.js`

[giphyApp]: ./src/Images/GiphyApp.png

src/Images/GiphyApp.png
