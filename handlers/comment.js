const db = require('../models');

exports.createComment = (req, res) => {
  db.Comment.create({
    text: req.body.text,
    post: req.params.id
  }, (err, comment) => {
    if(err) {
      return console.log(err);
    }
    // comment.author.id = user._id
    // comment.author.username = user.username
    // comment.save()
    console.log('Comment added to db: ', comment);
    db.Post.findById(req.params.id, (err, post) => {
      if(err) {
        return console.log(err);
      }
      post.comments.push(comment);
      post.save();
    });
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