const { deletePostQuery } = require('../../dataBase/queries');

const deletePost = (req, res) => {
  const { postId, check, username } = req.value;

  if (check) {
    deletePostQuery(postId)
      .then((data) => {
        res.redirect(`/profilePage?name=${username}`);
      });
  } else {
    res.clearCookie('username').clearCookie('token').clearCookie('admin').redirect('/');
  }
};

module.exports = deletePost;
