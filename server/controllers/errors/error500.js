const { join } = require('path');

const error500 = (err, req, res, next) => {
  res.sendFile(join(__dirname, '..', '..', 'server', 'public', 'error500.html'));
};

module.exports = error500;
