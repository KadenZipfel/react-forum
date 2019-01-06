const express = require('express');
const router = express.Router();

const {
  createComment,
  deleteComment
} = require('../handlers/comment');

router.route('/').post(createComment);

router.route('/:comment_id').delete(deleteComment);

module.exports = router;