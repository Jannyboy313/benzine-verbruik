require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ROUTES
app.use(cors());

//LISTENER
app.listen(process.env.PORT, () => {
    console.log('Listening to port ' + process.env.PORT)
});