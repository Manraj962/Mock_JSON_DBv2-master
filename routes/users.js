const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');


//Router handler for our home page
router.get('/home',  (req, res)=>{
    res.render('home');
});

router.use(express.urlencoded({extended: true}));

//users post route to add a new user
router.post('/users', userController.createUser);


module.exports = router;