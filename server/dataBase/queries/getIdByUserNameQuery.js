const connection = require('../config/connection');

const getIdByUserNameQuery = (username) => connection.query('SELECT id FROM users WHERE username=$1', [username]);

module.exports = getIdByUserNameQuery;