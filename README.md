# Benzine usage webapplication
This application is used for keeping track of the refueling and distance driven (By car). <br />
With the data given about distance and refueling the application will create statistics which will tell
if you have used more fuel then you have refueled. <br />
Its primary used for when you are using someone elses car and want to keep track globally.

### Techinacal overview
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

To remove all containers.

## Env credentials
Below are the credentials needed by the application. <br />
There have to be 2 env files in both folders (web & api).

### web
- api_url (Inside environment.ts)

### api
- DATABASE_URL
- ACCESS_TOKEN
- REFRESH_TOKEN
- PORT=3000

## Deployment
Be sure to have a mongo database setup on you're own server or from mongo atlas. <br />
If you want to deploy this on you're server u have to follow these steps.

### Without docker

#### Frontend
- Navigate into the web folder
- Run ```ng build```
- Upload "dist" of the web folder to you're server
- Configure you're nginx or apache

#### Backend
- Install Node and PM2
- Copy the api folder to the server
- Run the api with ```pm2 start```
- Configure you're nginx or apache

Don't forget to add and update the ENV file!

### With docker
U can be lazy and just copy everything and use ```docker compose up``` but I strongly advice against it. <br />
I would suggest following these steps:

#### Frontend
- Navigate into the web folder
- Run ```ng build```
- Create a docker file -> from NGINX
- Copy the angular dist into the image
- Put the image on the server

#### Backend
- Create a docker file -> from node:16.14.2-alpine3.15
- Copy the api folder into that image
- Add the ```npm install``` and ```npm run start``` commands.
- Put the image on the server

Now you can put these images in a swarm by a stack.yml file or run them manually/docker compose.