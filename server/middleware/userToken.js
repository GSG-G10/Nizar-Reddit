const { sign } = require('jsonwebtoken');

const userCookie = ((req, res, next) => {
  const {
    id, username, admin,
  } = req;
  const cookie = sign({
    id, username, is_user: true, is_admin: false,
  }, process.env.SECRET);
  if (admin) {
    res.cookie('token', cookie, { secure: true }).cookie('username', username, { secure: true }).cookie('admin', admin, { secure: true });
    next();
  } else {
    res.cookie('token', cookie, { secure: true }).cookie('username', username, { secure: true }).cookie('admin', admin, { secure: true }).redirect('/');
  }
});

module.exports = userCookie;
