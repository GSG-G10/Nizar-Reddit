const connection = require('../config/connection');

const getPostData = (id) => connection.query(
  'SELECT p.id, p.title, p.user_id, p.url, p.content ,(SELECT count(v.id) as likes FROM votes AS v WHERE v.post_id = p.id),(SELECT count(c.id) AS comments FROM comments AS c WHERE c.post_id = p.id), (SELECT u.username FROM users AS u WHERE p.user_id = u.id)  FROM posts AS p WHERE p.id=$1', [id]
);

module.exports = getPostData;
