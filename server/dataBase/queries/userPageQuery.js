const connection = require('../config/connection');

const getUserPage = (userData) => connection.query(
  'SELECT p.id, p.title, p.user_id, p.url,(SELECT count(v.id) as likes FROM votes AS v WHERE v.post_id = p.id),(SELECT count(c.id) AS comments FROM comments AS c WHERE c.post_id = p.id), (SELECT u.username FROM users AS u WHERE p.user_id = u.id)  FROM posts AS p WHERE id=$1',
  [userData.userId],
);

module.exports = getUserPage;
