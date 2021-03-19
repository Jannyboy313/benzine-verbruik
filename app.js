require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter.js');

const app = express();

app.use(express.json())

//ROUTES
app.use(cors());
app.use('/user', userRouter);

//LISTENER
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then((result) => {
        app.listen(process.env.PORT);
        console.log(`Running on port ${process.env.PORT}`);
    })
    .catch((err) => console.log(err));