const { getCommentsQuery } = require('../dataBase/queries');

const getCommentsData = (req, res) => {
  const { id } = req.query;
  getCommentsQuery(id)
    .then((data) => data.rows)
    .then((result) => res.json(result));
};

module.exports = getCommentsData;
