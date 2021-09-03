const { getIdByUserNameQuery, getPostsForAccountQuery } = require('../dataBase/queries');

const getProfilePostsData = (req, res) => {
  const { name } = req.query;

  getIdByUserNameQuery(name)
    .then((data) => getPostsForAccountQuery(data.rows[0].id))
    .then((data) => res.json(data.rows));
};

module.exports = getProfilePostsData;
