const express = require('express');

const userRouter = require('./routes/userRoutes');
const companyRouter = require('./routes/companyRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//parse the cookies of the request
app.use(cookieParser());

// enable cors
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

// enable morgan
app.use(morgan('dev'));

//parse the request body
app.use(express.json());

app.use('/users', userRouter);
app.use('/companies', companyRouter);

module.exports = app;