const connection = require('../config/connection');

const checkUserExisitQuery = (email) => {
  connection.query('SELECT EXISTS(SELECT 1 FROM users WHERE email=$1)', [email]);
};

module.exports = checkUserExisitQuery;
