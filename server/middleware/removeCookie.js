const removeCookie = (req, res) => {
  res.clearCookie('username').clearCookie('token').clearCookie('admin').redirect('/');
};

module.exports = removeCookie;
