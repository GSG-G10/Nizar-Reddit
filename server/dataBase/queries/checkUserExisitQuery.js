const connection = require('../config/connection');

const checkUserExisitQuery = (email, id) => connection.query('SELECT EXISTS(SELECT 1 FROM users WHERE email=$1 OR id=$2)', [email, id]);

module.exports = checkUserExisitQuery;
