const { getPostsQuery } = require('../../dataBase/queries');

const getMainPage = (req, res) => {
  getPostsQuery().then((data) => res.json(data));
};

module.exports = getMainPage;
