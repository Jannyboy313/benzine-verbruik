require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const swaggerUI = require('swagger-ui-express');

require('./config/passport.js')(passport);
const swaggerDocument = require('./util/swagger.json');
const userRouter = require('./routes/userRouter.js');
const rideRouter = require('./routes/rideRouter.js');
const fuelRouter = require('./routes/fuelRouter.js');
const isAuth = require('./middleware/isAuth.js');

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.json());

// Documentation middleware
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// passport middleware
app.use(passport.initialize());

//ROUTES
app.use(cors({ origin: [`http://localhost:4200`],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:true,
}));
app.use('/user', userRouter);
app.use('/ride', isAuth, rideRouter);
app.use('/fuel', isAuth, fuelRouter)

//LISTENER
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(result => {
        app.listen(process.env.PORT);
        console.log(`Running on port ${process.env.PORT}`);
    })
    .catch(err => console.log(err));