const express = require('express');
const router = express.Router();

const {
  createComment,
  deleteComment,
  getComments
} = require('../handlers/comment');

router.route('/:id').get(getComments);

router.route('/:id').post(createComment);

router.route('/:id/:comment_id').delete(deleteComment);

module.exports = router;