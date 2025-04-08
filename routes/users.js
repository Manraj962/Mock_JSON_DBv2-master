const express = require('express');
const router = express.Router();
const { createUser} = require('../controllers/userController.js');


//Router handler for our home page
router.get('/home', (req, res)=>{
    res.render('home');
});


// users post route to add a new user
router.post('/users', userController.createUser);

module.exports = router;