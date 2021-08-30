const connection = require('../config/connection');

const getComments = (postId) => connection.query(
  'SELECT c.id, c.post_id, c.user_id, c.content, u.username  FROM comments AS c INNER JOIN users As u ON c.user_id = u.id WHERE c.post_id = 2',
  [postId],
);

module.exports = getComments;
