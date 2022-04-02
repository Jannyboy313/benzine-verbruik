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