const connection = require('../config/connection');

const addPostQuery = (userId, postTitle, postUrl, postContent) => connection.query(
  'INSERT INTO posts (user_id, title, url, content) VALUES ($1, $2, $3, $4)',
  [userId, postTitle, postUrl, postContent],
);

module.exports = addPostQuery;
