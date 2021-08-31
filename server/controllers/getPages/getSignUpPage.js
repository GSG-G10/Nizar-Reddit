const { join } = require('path');

const getSignUpPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'signUpPage.html'));
};

module.exports = getSignUpPage;
