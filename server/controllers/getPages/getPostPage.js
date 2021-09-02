const { join } = require('path');

const getPostPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'post.html'));
};

module.exports = getPostPage;
