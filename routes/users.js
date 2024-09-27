const express = require("express");
const router = express.Router();
//login
 router.get("/login",  (req, res) => res.render('login'));
 //register
 router.get("/register",  (req, res) => res.render('register'));
//dashboard
router.get("/dashboard",  (req, res) => res.render('dashboard'));
//welcome
router.get("/welcome",  (req, res) => res.render('welcome'));
 
 module.exports = router;