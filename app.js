const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const db = require('./models');
const passport = require('passport');
const LocalStrategy = require('passport-local');

app.use(cors());
app.use(bodyParser.json());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  maxAge: 365 * 24 * 60 * 60 * 1000
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

app.use('/api/auth', authRoutes);

app.get('/api/posts', (req, res) => {
  db.Post.find({}, (err, posts) => {
    if(err) {
      return console.log(err);
    }
    return res.status(200).json(posts);
  })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('The server is running');
});