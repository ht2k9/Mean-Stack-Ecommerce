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
  (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
    res.send(req.user);
});

module.exports = router;