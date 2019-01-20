const router = require("express").Router();
const passport = require("passport");

const User = require("./admin-model");

router.use(passport.initialize());
router.use(passport.session());

passport.use((User.createStrategy()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post('/',
  passport.authenticate('local'),
  (req, res, next) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
    res.send(req.isAuthenticated());
    next();
});

router.get('/', (req, res, next) => {
  console.log('logging out..');
  req.logOut();
  res.send(req.isAuthenticated());
  next();
});

router.get('/current', (req, res, next) => {
  res.send(req.isAuthenticated());
  next();
});

module.exports = router;