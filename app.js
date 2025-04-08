const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js');
require('dotenv').config();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const fixedWindowRateLimit = rateLimit({
 windowsMs: 1 * 15 * 1000,
 max: 10,
 message: 'Too many requests.  Please try again later.',
});

//Setup the view engine
app.set('view engine','ejs');
app.set('views', './views');

//Middleware to serve static files
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(fixedWindowRateLimit);
app.use(userRoutes);



app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Connected on port: ${PORT}`);
});