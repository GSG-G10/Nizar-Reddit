const { checkUserExisitQuery } = require('../dataBase/queries');
const { signUpSchema } = require('../util');

const signUpValidate = (req, res, next) => {
  checkUserExisitQuery(req.body.email)
    .then((data) => data.rows[0].exists)
    .then((data) => {
      if (data) {
        res.status(403).json({ message: 'this Email has REDDIT accout' });
      } else {
        signUpSchema.validateAsync(req.body)
          .then((value) => {
            req.value = value;
            next();
          })
          .catch((err) => {
            res.status(400).json(err.details[0]);
          });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = signUpValidate;
