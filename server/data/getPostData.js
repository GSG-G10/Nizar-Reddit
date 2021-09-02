const { getPostData } = require('../dataBase/queries');

const getPostDataController = (req, res) => {
  const { id } = req.query;
  getPostData(id).then((data) => {
    res.json(data);
  });
};

module.exports = getPostDataController;
