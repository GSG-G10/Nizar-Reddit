const { verify } = require('jsonwebtoken');

const checkUserIsAdmin = (req, res, next) => {
  const { name } = req.query;
  const { token } = req.cookies;
  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.clearCookie('username').clearCookie('token').redirect('/');
    } else {
      req.username = decoded.username;
      req.id = decoded.id;
      if (decoded.username === name) {
        req.admin = true;
      } else {
        req.admin = false;
      }
      next();
    }
  });
};

module.exports = checkUserIsAdmin;
