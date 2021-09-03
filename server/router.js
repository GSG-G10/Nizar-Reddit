const express = require('express');

const { error404, error500 } = require('./controllers/errors');
const { getPostDataController, getCommentsData, getProfilePostsData } = require('./data');
const { insertComment } = require('./controllers/insertDataController');
const {
  getMainPage, getSignUpPage, getLoginPage, getPostPage, redirectMainController, getProfilepage,
} = require('./controllers/getPages');

const { signUpController } = require('./controllers/authentication');

const {
  signUpValidate, userCookie, loginValidate, removeCookie, checkAuth,
} = require('./middleware');

const router = express.Router();
router.get('/postdata', getMainPage);
router.get('/sign-up-page', getSignUpPage);
router.get('/login-page', getLoginPage);
router.get('/logout', removeCookie);
router.get('/postPage', getPostPage);
router.get('/post', getPostDataController);
router.get('/comments', getCommentsData);
router.get('/', redirectMainController);
router.get('/profilePage', getProfilepage);
router.get('/profileposts', getProfilePostsData);
router.post('/addcomment', checkAuth, insertComment);
router.post('/signup', signUpValidate, signUpController, userCookie);
router.post('/login', loginValidate, userCookie);

router.use(error404);
router.use(error500);

module.exports = router;
