const express = require('express');

const { error404, error500 } = require('./controllers/errors');
const { getMainPage, getSignUpPage, getLoginPage } = require('./controllers/getPages');

const router = express.Router();
router.get('/postdata', getMainPage);
router.get('/sign-up-page', getSignUpPage);
router.get('/login-page', getLoginPage);

router.use(error404);
router.use(error500);

module.exports = router;
