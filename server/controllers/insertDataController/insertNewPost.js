const { addPostQuery } = require('../../dataBase/queries');

const insertNewPost = (req, res) => {
  const { postTitle, postContent, postUrl } = req.body;
  const { userId, username } = req.value;

  addPostQuery(userId, postTitle, postUrl, postContent)
    .then(res.redirect(`/profilePage?name=${username}`));
};

module.exports = insertNewPost;
