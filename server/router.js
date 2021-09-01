const express = require('express');

const { error404, error500 } = require('./controllers/errors');
const { getMainPage, getSignUpPage, getLoginPage } = require('./controllers/getPages');
const { signUpValidate, userCookie, loginValidate } = require('./middleware');
const { signUpController } = require('./controllers/authentication');

const router = express.Router();
router.get('/postdata', getMainPage);
router.get('/sign-up-page', getSignUpPage);
router.get('/login-page', getLoginPage);
router.post('/signup', signUpValidate, signUpController, userCookie);
router.post('/login', loginValidate, userCookie);

router.use(error404);
router.use(error500);

module.exports = router;
