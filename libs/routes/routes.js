const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/signup', (req, res)=>{
    res.render('pages/signup');
})

router.post('/user', userController.createUser);

router.get('/about', (req, res)=>{
    res.send("About mr route");
})

router.get('/contact', (req, res)=>{
    res.send("Contact me now");
})

module.exports = router;