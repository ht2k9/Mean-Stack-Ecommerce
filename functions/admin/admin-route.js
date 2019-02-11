const router = require("express").Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("./admin-model");

router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post('/',
  passport.authenticate('local'),
  (req, res, next) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.

  console.log(req.session);
  res.send(req.isAuthenticated());
  next();
});

router.get('/', (req, res, next) => {
  console.log('logging out..');
  req.logOut();
  res.send(req.isAuthenticated());
  next();
});

module.exports = router;