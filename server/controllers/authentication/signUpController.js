const { hashPassword } = require('../../util');
const { signUpQuery } = require('../../dataBase/queries');

const signUpController = (req, res, next) => {
  const {
    username, email, password,
  } = req.value;
  hashPassword(password)
    .then((hashedPass) => signUpQuery({ username, email, password: hashedPass }))
    .then((data) => data.rows[0])
    .then((data) => {
      req.id = data.id;
      req.username = data.username;
      req.admin = false;
      next();
    });
};

module.exports = signUpController;
