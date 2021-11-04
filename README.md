# Giphy App

![][giphyApp]

The giphy application displays a list of `trending` gifs. 

From the home page the user may use the search bar in order to search for other gifs.

Once a user finds a gif that they like, they can click the `embed` button or the `share` button where a modal will display allowing the user to copy the embed source code or the giphy URL to share the gif.

## Prerequisites

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
  - Select `API -> Next Step`
  - Enter App Name e.g. `My First Giphy App`
  - Accept terms and conditions
  - Click create app
  - Your giphy API should be made available to you now.

## Build Steps
You have two options to run this application, either via docker or locally, steps for both processes are below
### Build and run via docker
#### Docker Prerequisites
- Docker is required [Get Docker](https://docs.docker.com/get-docker/)
- Once docker is installed
  - Clone project `git clone git@github.com:bonjo7/giphy-app.git`
  - Change directory to the `giphy-app` directory
    - `cd giphy-app`
  - From the route directory run the following command `docker build -t giphy-app .` This command will use the dockerfile to build the container image
  - Once complete, run `docker images` and you should see the container image `giphy-app` avalibale
  - Too run the container image run 
  ```
  docker run --name giphy-app -p 3000:3000 -e REACT_APP_GIPHY_API_KEY=<YOUR_GIPHY_API_KEY> giphy-app:latest
  ``` 
  this command will run the container from the `giphy-app:latest` image called `giphy-app` assigning the port to `3000` and assiging the envoirnment variable `REACT_APP_GIPHY_API_KEY`
  - The app should now be running on port 3000 `http://localhost:3000`

### Build and run locally
- Clone project `git clone git@github.com:bonjo7/giphy-app.git`
- Change directory to the `giphy-app` directory
  - `cd giphy-app`
- Install dependencies `npm install`
- Create a file in the root directory called `.env`
  - In this file create a variable `REACT_APP_GIPHY_API_KEY`
  - Your `.env` file should look like this `REACT_APP_GIPHY_API_KEY=<your_giphy_key>`
- Start app `npm run start`
- App should not be running on port 3000 `http://localhost:3000`

## Testing
In order to complete the tests follow the `Build and run locally` steps above prior to running the below test commands.

### Command Line
- To test the application without the cypress UI run the following command from the app route directory `npm run cy:run -- "cypress/integration/usersearch-spec.js"`

### Cypress View
- To test the application using the cypress UI run the following command from the app route directory `npm run cypress`
- From the cypress UI click `Tests` and select the desired testing file
  - `usersearch.spec.js`
  - `useshare.spec.js`

[giphyApp]: ./src/Images/GiphyApp.png
