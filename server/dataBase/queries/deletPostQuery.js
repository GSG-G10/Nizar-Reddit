const connection = require('../config/connection');

const deletePostQuery = (postId) => connection.query('DELETE FROM posts WHERE posts.id=$1',
  [postId]);

module.exports = deletePostQuery;
