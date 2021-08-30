const connection = require('../config/connection');

const loginQuery = (userData) => connection.query(
  'SELECT id, username, password FROM users WHERE username=$1',
  [userData.username],
);
module.exports = loginQuery;
