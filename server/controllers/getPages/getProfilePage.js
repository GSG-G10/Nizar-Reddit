const { join } = require('path');

const getProfilepage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'userPage.html'));
};

module.exports = getProfilepage;
