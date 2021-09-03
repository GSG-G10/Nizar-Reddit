const { verify } = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const { postId } = req.query;
  const { token } = req.cookies;
  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.clearCookie('username').clearCookie('token').redirect('/');
    } else {
      // eslint-disable-next-line no-lonely-if
      if (decoded.is_user) {
        req.value = {
          postId, userId: decoded.id, username: decoded.username, content: req.body.textArea,
        };
        next();
      } else {
        res.status(401).json({ msg: 'You are Not user in Reddit' });
      }
    }
  });
};

module.exports = checkAuth;
