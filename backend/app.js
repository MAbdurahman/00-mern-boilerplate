/************************* imports *************************/
import colors from 'colors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'node:path';
import HomePage from './homePage.js';

/************************* setup config file *************************/
if (process.env.NODE_ENV !== 'production') {
   dotenv.config({path: 'backend/config/config.env'})
}
/************************* variables *************************/
const app = express();
colors.enabled = true;
/************************* middlewares *************************/
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}
app.use(express.json()); // for parsing application/json
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(helmet());

/************************* import all routes *************************/


/************************* routes *************************/
app.get('/api/v1.0/', (req, res) => {
   res.send(HomePage());
});




export default app;