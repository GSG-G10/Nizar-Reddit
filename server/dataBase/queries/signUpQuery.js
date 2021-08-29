const connection = require('../config/connection');

const signUpQuery = (newUserData) => {
  connection.query(
    'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id, username, email',
    [newUserData.email, newUserData.username, newUserData.password],
  );
};

module.exports = signUpQuery;
