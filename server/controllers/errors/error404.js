const { join } = require('path');

const error404 = (req, res, next) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'error404.html'));
};

module.exports = error404;
