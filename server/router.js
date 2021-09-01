const express = require('express');

const { error404, error500 } = require('./controllers/errors');
const { getPostDataController } = require('./data');
const {
  getMainPage, getSignUpPage, getLoginPage, getPostPage,
} = require('./controllers/getPages');

const { signUpController } = require('./controllers/authentication');

const {
  signUpValidate, userCookie, loginValidate, removeCookie,
} = require('./middleware');

const router = express.Router();
router.get('/postdata', getMainPage);
router.get('/sign-up-page', getSignUpPage);
router.get('/login-page', getLoginPage);
router.get('/logout', removeCookie);
router.get('/postPage', getPostPage);
router.get('/post', getPostDataController);
router.post('/signup', signUpValidate, signUpController, userCookie);
router.post('/login', loginValidate, userCookie);

router.use(error404);
router.use(error500);

module.exports = router;
