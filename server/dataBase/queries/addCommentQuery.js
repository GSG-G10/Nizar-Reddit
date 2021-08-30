const connection = require('../config/connection');

const addCommentQuery = (newCommentData) => connection.query(
  'INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3)',
  [newCommentData.postId, newCommentData.userId, newCommentData.content],
);

module.exports = addCommentQuery;
