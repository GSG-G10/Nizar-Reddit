const connection = require('../config/connection');

const addPostQuery = (newPostData) => {
  connection.query(
    'INSERT INTO posts (user_id, title, content, url) VALUES ($1, $2, $3, $4))',
    [
      newPostData.userId,
      newPostData.title,
      newPostData.content,
      newPostData.url,
    ],
  );
};

module.exports = addPostQuery;
