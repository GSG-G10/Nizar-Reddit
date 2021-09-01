const { sign } = require('jsonwebtoken');

const userCookie = ((req, res) => {
  const cookie = sign({ user: true, id: req.body.id }, process.env.SECRET);
  res.cookie('token', cookie, { httpOnly: true, secure: true }).redirect('/');
});

module.exports = userCookie;
