[![Netlify Status](https://api.netlify.com/api/v1/badges/6f6dac2f-f05f-434f-89e5-1d84a8f4e699/deploy-status)](https://app.netlify.com/sites/whatpm/deploys)

Frontend for [what.pm](https://www.what.pm), where I track my book, movie and tv show consumption. It runs on [VueJS](https://vuejs.org) and is deployed to [Netlify](https://www.netlify.com). 

## Install locally
### Clone
First, clone the repo: 
```
git clone git@github.com:nienkedekker/whatpm-client.git
```

### Install
Then, install the dependencies by running `yarn install`. You can use npm, but make sure to delete the `yarn.lock` file then.

### dotenv
Open the repo in your favorite code editor and create a new file in the root called `.env`. Copy what's in `.env.dist` . You may not have a value for the key `VUE_APP_API_BASE_URL` at this point - we'll get to that.

### Run
Run the project with `yarn start:dev` and go to `localhost:8080`.

### Connect to the server
When you open the app you might get an error saying it's not able to connect to the API. If that's the case, follow the instructions for [whatpm-server](https://github.com/nienkedekker/whatpm-server). Once you have that up and running, copy the URL the server's running on and use that as the value for `VUE_APP_API_BASE_URL` in your `.env` file.
