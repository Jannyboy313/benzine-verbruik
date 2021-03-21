require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');

require('./config/passport.js')(passport);
const userRouter = require('./routes/userRouter.js');
const rideRouter = require('./routes/rideRouter.js');

const app = express();

app.use(exppress.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.json())

// passport middleware
app.use(passport.initialize());

//ROUTES
app.use(cors());
app.use('/user', userRouter);
app.use('/ride', rideRouter);

//LISTENER
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then((result) => {
        app.listen(process.env.PORT);
        console.log(`Running on port ${process.env.PORT}`);
    })
    .catch((err) => console.log(err));