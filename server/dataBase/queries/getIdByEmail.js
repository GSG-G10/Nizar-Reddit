const connection = require('../config/connection');

const getIdByEmail = (email) => connection.query('SELECT id FROM users WHERE email=$1', [email]);

module.exports = getIdByEmail;
