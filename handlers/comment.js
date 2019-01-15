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
    db.Post.findById(req.body.id, (err, post) => {
      if(err) {
        return console.log(err);
      }
      post.comments.push(comment._id);
      post.save();
    });
    return res.status(200).json(comment);
  });
};

exports.deleteComment = (req, res) => {
  db.Comment.findByIdAndRemove(req.params.comment_id, (err) => {
    if(err) {
      return console.log(err);
    }
    return res.status(200);
  });
};

exports.getComments = (req, res) => {
  db.Post.findById(req.params.id, (err, post) => {
    if(err) {
      return console.log(err);
    }
    return res.status(200).json(post.comments);
  });
};