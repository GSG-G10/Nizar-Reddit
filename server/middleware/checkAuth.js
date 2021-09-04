const { verify } = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const { postId } = req.body;
  const { token } = req.cookies;
  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.clearCookie('username').clearCookie('token').clearCookie('admin').redirect('/');
    } else {
      // eslint-disable-next-line no-lonely-if
      if (decoded.is_user) {
        req.value = {
          postId, userId: decoded.id, username: decoded.username, content: req.body.textArea, check: decoded.is_admin,
        };
        next();
      } else {
        res.status(401).json({ msg: 'You are Not user in Reddit' });
      }
    }
  });
};

module.exports = checkAuth;
