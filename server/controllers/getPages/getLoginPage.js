const { join } = require('path');

const getLoginPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'loginPage.html'));
};

module.exports = getLoginPage;
