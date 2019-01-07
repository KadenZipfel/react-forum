const db = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local');

exports.signup = (req, res) => {
  db.User.register(
    new db.User({
      email: req.body.email, 
      username: req.body.username
    }), req.body.password, (err, user) => {
      if(err) {
        console.log(err);
      }
      passport.authenticate('local')(req, res, () => {
        res.redirect('/');
      });
      console.log(user);
  });
};

exports.signin = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: 'back'
});

exports.signout = (req, res) => {
  req.logout();
  res.redirect('/');
}