# Giphy App

The giphy application displays a list of trending gifs where a user can search for gifs.

## Build Steps

- Clone project `git clone git@github.com:bonjo7/giphy-app.git`
- Change directory for the `giphy-app` durectory
    - `cd giphy-app`
- Install dependencies `npm install`
- Start app `npm run start`
- App should not be running on port 8080 `http://localhost:8080`

## Testing

Command Line
- `npm run cy:run -- "cypress/integration/usersearch-spec.js"`

Cypress View
- `npm run cypress`
- From the cypress UI click `Tests` and select `usersearch.spec.js`


