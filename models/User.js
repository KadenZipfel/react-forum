const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required,
    unique
  },
  username: {
    type: String,
    required, 
    unique
  },
  password: {
    type: String,
    required
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;