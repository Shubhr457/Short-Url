const express = require('express')
const router = express.Router();

router.get("/", (req,res) =>{
    return res.render('home');
})

router.get("/signup", (req,res) =>{
    return res.render('signup')
})

router.get("/Login", (req,res) =>{
    return res.render('Login')
})

module.exports = router;