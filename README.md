# Benzine usage webapplication

This application is used for keeping track of the refueling and distance driven (By car). <br />
With the data given about distance and refueling the application will create statistics which will tell
if you have used more fuel then you have refueled. <br />
Its primary used for when you are using someone elses car and want to keep track globally.

### Technical overview

The "benzine-verbruik" repository has a full **MEAN** stack application seperated into 2 folders. <br />
The folders are categorized as frontend (web) and backend (api). <br />
Both have there own gitignore and env file. The reason is to keep it structured, clean and uncluttered. <br />
This has to be done with future changes in mind like implement nestjs in the current api. <br />
The api uses rest for the same reason as stated above.

## Installation

The installation is rather simple since this project has been dockerized. <br />
Before starting the application you have to install all modules. <br />
This is done be running this command in both the web & api folder.

```bash
npm install
```

After that you have to create an ENV file based on the example in both the web & api folder. <br />
Without the env file the api will not work and the web will not function properly. <br />

For using linting and formatting run:
```bash
npm install
```
Inside the parent folder of api and web.

## Running

To run the project you have to navigate into the "docker" folder. <br />
Once navigated run the command:

```bash
docker compose up
```

This will create all containers used for this project. <br />
To quit the serves use CTRL + C. <br />
If needed use:

```bash
docker compose down
```

To remove all containers. <br/>
**This will also delete all data from the database!** <br />
This is done on purpose for faster clean environments for developing.

## Credentials

A standard test account is created when starting the project:

-   email: test@test.nl
-   password: test

This is set in the `mongodb-init.js` file. This is located in the docker folder.

Below are the credentials needed by the application. <br />
There have to be 2 env files in both folders (web & api).

### api

```env
DATABASE_URL="mongodb://test:testpwd@database:27017/benzine?authMechanism=DEFAULT"
ACCESS_TOKEN=secret
REFRESH_TOKEN=secret
PORT=3000
CORS_ORIGIN=http://web:4200
```

## Commands
There are a few commands for linting and formatting within the project. <br />
Be sure to be in the parent folder of api and web. <br>
 - Use the command ```npm run eslint``` for **linting** the whole project. <br />
 - Use the command ```npm run format``` for **formatting** the whole project. <br />

## Deployment

Be sure to have a mongo database setup on you're own server or from mongo atlas. <br />
If you want to deploy this on you're server u have to follow these steps.

### Without docker

#### Frontend

-   Navigate into the web folder
-   Run `npm run build --prod`
-   Upload "dist/benzine-prod" of the web folder to you're server
-   Configure you're nginx or apache

#### Backend

-   Install Node and PM2
-   Copy the api folder to the server
-   Run the api with `pm2 start`
-   Configure you're nginx or apache

Don't forget to add and update the ENV file!

### With docker

U can be lazy and just copy everything and use `docker compose up` but I strongly advice against it. <br />
Every release has a docker image of the frontend and backend separately that can be used.

#### Frontend
[jannyboy313/web-benzine-verbruik](https://hub.docker.com/repository/docker/jannyboy313/web-benzine-verbruik)

#### Backend
[jannyboy313/web-benzine-verbruik](https://hub.docker.com/repository/docker/jannyboy313/api-benzine-verbruik)

Now you can put these images in a swarm by a stack.yml file or run them manually/docker compose. <br />
Be sure to include the environment variables and a mongodb instance for the backend.

## Documentation

This readme is a form of documentation for the project ofcourse, but there is more! <br />
The api uses swagger as documentation tool for all the endpoints, this can be found on localhost:port/api-docs when the api is running. <br />
The angular webapplication doesn't contain any documentation **yet** this will be added in the future.
