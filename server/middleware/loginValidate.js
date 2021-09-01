const { checkUserExisitQuery, getPasswordByEmail, getIdByEmail } = require('../dataBase/queries');
const { comparePassword } = require('../util');
const { loginSchema } = require('../util');

const loginValidate = (req, res, next) => {
  checkUserExisitQuery(req.body.email)
    .then((data) => data.rows[0].exists)
    .then((data) => {
      if (data) {
        loginSchema.validateAsync(req.body)
          .then((value) => {
            req.body.value = value;
            getPasswordByEmail(req.body.email)
              .then((result) => result.rows[0].password)
              .then((hashPass) => {
                comparePassword(req.body.password, hashPass)
                  .then((result) => {
                    if (result) {
                      getIdByEmail(req.body.email)
                        .then((id) => {
                          req.body.id = id.rows[0].id;
                          req.body.username = id.rows[0].username;
                          next();
                        });
                    } else {
                      res.status(403).json({ message: 'your email or password is incorrect' });
                    }
                  });
              });
          })
          .catch((err) => {
            res.status(400).json(err.details[0]);
          });
      } else {
        res.status(403).json({ message: 'your email or password is incorrect' });
      }
    })
    .catch((err) => {
      err.status(403).json({ message: 'your email or password is incorrect' });
    });
};

module.exports = loginValidate;
