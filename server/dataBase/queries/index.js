const addPostQuery = require('./addPostQuery');
const getCommentsQuery = require('./getCommentsQuery');
const getPostsQuery = require('./getPostsQuery');
const loginQuery = require('./loginQuery');
const signUpQuery = require('./signUpQuery');
const singlePostQuery = require('./singlePostQuery');
const deletePostQuery = require('./deletPostQuery');
const addCommentQuery = require('./addCommentQuery');
const addlikeQuery = require('./addLikeQuery');
const deleteLikeQuery = require('./deleteLikeQuery');
const getUserPage = require('./userPageQuery');
const checkUserExisitQuery = require('./checkUserExisitQuery');
const getPasswordByEmail = require('./getPasswordByEmail');
const getIdByEmail = require('./getIdByEmail');

module.exports = {
  addPostQuery,
  getCommentsQuery,
  getPostsQuery,
  loginQuery,
  signUpQuery,
  singlePostQuery,
  deletePostQuery,
  addCommentQuery,
  addlikeQuery,
  deleteLikeQuery,
  getUserPage,
  checkUserExisitQuery,
  getPasswordByEmail,
  getIdByEmail,
};
