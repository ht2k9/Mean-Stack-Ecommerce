const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
    
const User = require("./models/user");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require("express-session")({
  secret: "PhotoFactory e-commerce admin",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use((User.createStrategy()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('', (req, res) => {
  res.send("user testing");
});


// Login logic
app.post('/login',
  passport.authenticate('local'),
  (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.send({isLogged: true});
});

// middleware

app.listen(3000, ()=> {
  console.log("listening to port 3000");
})