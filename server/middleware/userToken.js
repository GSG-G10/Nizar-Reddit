const { sign } = require('jsonwebtoken');

const userCookie = ((req, res) => {
  const { id, username } = req.body;
  const cookie = sign({ user: true, id }, process.env.SECRET);
  res.cookie('token', cookie, { secure: true }).cookie('username', username, { secure: true }).redirect('/');
});

module.exports = userCookie;
