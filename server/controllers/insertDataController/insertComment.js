const { addCommentQuery } = require('../../dataBase/queries');

const insertComment = (req, res) => {
  addCommentQuery(req.value)
    .then(res.redirect(`/postPage?id=${req.value.postId}`));
};

module.exports = insertComment;
