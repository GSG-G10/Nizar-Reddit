const signUpValidate = require('./signUpValidate');
const userCookie = require('./userToken');
const loginValidate = require('./loginValidate');
const removeCookie = require('./removeCookie');
const checkAuth = require('./checkAuth');

module.exports = {
  signUpValidate, userCookie, loginValidate, removeCookie, checkAuth,
};
