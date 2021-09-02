const { sign } = require('jsonwebtoken');

const userCookie = ((req, res) => {
  const { id, username } = req;
  const cookie = sign({ id, username, is_admin: true }, process.env.SECRET);
  res.cookie('token', cookie, { secure: true }).cookie('username', username, { secure: true }).redirect('/');
});

module.exports = userCookie;
