const cookies = document.cookie;
const cookieToken = cookies.split('; ')[0].split('=')[1];
const cookieUserName = cookies.split('; ')[1].split('=')[1];

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
