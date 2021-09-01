const bcrypt = require('bcryptjs');

const comparePassword = (password, hashPassword) => {
  bcrypt.compare(password, hashPassword);
};

module.exports = comparePassword;
