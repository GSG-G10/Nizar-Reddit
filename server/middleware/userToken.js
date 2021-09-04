const { sign } = require('jsonwebtoken');

const userCookie = ((req, res, next) => {
  const {
    id, username, admin,
  } = req;
  const cookie = sign({
    id, username, is_user: true, is_admin: false,
  }, process.env.SECRET);
  res.cookie('token', cookie, { secure: true }).cookie('username', username, { secure: true }).cookie('admin', admin, { secure: true });
  next();
});

module.exports = userCookie;
