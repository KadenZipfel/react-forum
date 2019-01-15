const db = require('../models');

exports.createComment = (req, res) => {
  db.Comment.create({
    text: req.body.comment,
    post: req.body.id,
    author: req.body.user
  }, (err, comment) => {
    if(err) {
      return console.log(err);
    }
    return console.log('Comment added to db');
  });
};

exports.deleteComment = (req, res) => {
  db.Comment.findByIdAndRemove(req.params.comment_id, (err) => {
    if(err) {
      return console.log(err);
    }
    console.log('Comment deleted')
  });
};