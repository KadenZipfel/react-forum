const db = require('../models');

exports.createPost = (req, res) => {
  db.Post.create({
    title: req.body.title,
    body: req.body.body
  }, (err, post) => {
    if(err) {
      return console.log(err);
    }
    // post.author.id = user._id
    // post.author.username = user.username
    console.log('Post added to db: ', post);
    // res.redirect somewhere appropriate
  });
};

exports.getPost = (req, res) => {
  db.Post.findById(req.params.id, (err, post) => {
    if(err) {
      return console.log(err);
    }
    return res.status(200).json(post);
  });
}

exports.getPosts = (req, res) => {
  db.Post.find({}, (err, posts) => {
    if(err) {
      return console.log(err);
    }
    return res.status(200).json(posts);
  })
};

exports.deletePost = (req, res) => {
  db.Post.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log('Post deleted');
    }
  });
};