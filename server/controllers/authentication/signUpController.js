const { hashPassword } = require('../../util');
const { signUpQuery } = require('../../dataBase/queries');

const signUpController = (req, res, next) => {
  const {
    username, email, password,
  } = req.body.value;
  hashPassword(password)
    .then((hashedPass) => signUpQuery({ username, email, password: hashedPass }))
    .then((data) => data.rows[0])
    .then((data) => {
      req.body.id = data.id;
      req.body.username = data.username;
      next();
    });
};

module.exports = signUpController;
