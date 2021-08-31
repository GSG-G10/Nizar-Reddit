const checkUserExisitQuery = require('../../dataBase/queries');

const signUpValidate = (req, res, next) => {
  console.log(req.body.username);
};

module.exports = signUpValidate;
