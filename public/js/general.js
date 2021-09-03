const cookies = document.cookie.split('; ');

const cookiesArr = [];
let element = '';

cookies.forEach((ele) => {
  element = ele.split('=');
  cookiesArr.push(element[0], element[1]);
});
const cookieUserName = cookiesArr[cookiesArr.indexOf('username') + 1];
const cookieAdmin = cookiesArr[cookiesArr.indexOf('admin') + 1];
const cookieToken = cookiesArr[cookiesArr.indexOf('username') + 1];

const admin = document.querySelector('.user');
admin.setAttribute('href', `/profilePage?name=${cookieUserName}`);

const notAuthBar = document.querySelector('.not-auth');
const authBar = document.querySelector('.auth');

const user = () => {
  notAuthBar.style.display = 'none';
  authBar.style.display = 'flex';
};
const visitor = () => {
  notAuthBar.style.display = 'flex';
  authBar.style.display = 'none';
};

const checkCookie = (cookie1, cookie2) => {
  if (cookie1 && cookie2) {
    const userName = document.querySelector('.content-btn-user');
    userName.textContent = cookie2;
    user();
  } else {
    visitor();
  }
};

checkCookie(cookieToken, cookieUserName);
