const connection = require('../config/connection');

const getPasswordByEmail = (email) => connection.query('SELECT password FROM users WHERE email=$1', [email]);

module.exports = getPasswordByEmail;
