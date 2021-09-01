const removeCookie = (req, res) => {
  res.clearCookie('token').redirect('/');
};

module.exports = removeCookie;
