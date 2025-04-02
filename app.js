const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js');
require('dotenv').config();
const PORT = process.env.PORT;
const rateLimit = require('express-rate-limit');
const fixedWindowsRateLimit = rateLimit({
    windowsMs: 1 * 15 * 1000,
    max: 10,
    message: 'Too many requests, please try again later.',
});



//Setup the view engine
app.set('view engine','ejs');
app.set('views', './views');

//Middleware to serve static files
app.use(express.static('public'));
app.use(fixedWindowsRateLimit);
app.use(userRoutes);



app.listen(PORT, ()=>{
    console.log(`Connected on port: ${PORT}`);
});