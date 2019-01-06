const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/react-forum');

module.exports.User = require('./User');
module.exports.Post = require('./Post');
module.exports.Comment = require('./Comment');