const removeCookie = (req, res) => {
  res.clearCookie('username').clearCookie('token').redirect('/');
};

module.exports = removeCookie;
