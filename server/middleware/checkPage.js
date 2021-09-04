const { verify } = require('jsonwebtoken');

const checkUserIsAdmin = (req, res, next) => {
  const { name } = req.query;
  const { token } = req.cookies;

  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      req.err = true;
      next();
    } else {
      if (decoded.username === name) {
        req.admin = true;
        req.id = decoded.id;
        req.username = decoded.username;
      } else {
        req.admin = false;
        req.id = decoded.id;
        req.username = decoded.username;
      }
      next();
    }
  });
};

module.exports = checkUserIsAdmin;
