const { sign } = require('jsonwebtoken');

const cookieAdmin = (req, res, next) => {
  const {
    id, username, admin, err,
  } = req;
  if (err) {
    res.redirect('/profilePage');
  } else {
    const cookie = sign({
      id, username, is_user: true, is_admin: admin,
    }, process.env.SECRET);
    if (req.admin) {
      res.cookie('token', cookie, { secure: true }).cookie('username', username, { secure: true }).cookie('admin', admin, { secure: true }).redirect('/profilePage');
    } else {
      res.cookie('token', cookie, { secure: true }).cookie('username', username, { secure: true }).cookie('admin', admin, { secure: true }).redirect('/profilePage');
    }
  }
};

module.exports = cookieAdmin;
