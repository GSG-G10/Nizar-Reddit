const connection = require('../config/connection');

const deletePostQuery = (postData) => connection.query('DELETE FROM posts WHERE posts.user_id=$1 AND posts.id=$2',
  [postData.userId, postData.postId]);

module.exports = deletePostQuery;
