const express = require('express');

const userRouter = require('./routes/userRoutes');
const companyRouter = require('./routes/companyRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// enable cors
app.use(cors());

// enable morgan
app.use(morgan('dev'));

//parse the cookies of the request
app.use(cookieParser());

//parse the request body
app.use(express.json());

app.use('/users', userRouter);
app.use('/', companyRouter);

module.exports = app;