const cookies = document.cookie;
const cookieToken = cookies.split('; ')[0].split('=')[1];
const cookieUserName = cookies.split('; ')[1].split('=')[1];

const notAuthBar = document.querySelector('.not-auth');
const authBar = document.querySelector('.auth');
const authBar1 = document.querySelector('.auth1');
const notAuthBar1 = document.querySelector('.not-auth1');

const user = () => {
  notAuthBar.style.display = 'none';
  authBar.style.display = 'flex';
  authBar1.style.display = 'flex';
  notAuthBar1.style.display = 'none';
};
const visitor = () => {
  notAuthBar.style.display = 'flex';
  authBar.style.display = 'none';
  authBar1.style.display = 'none';
  notAuthBar1.style.display = 'flex';
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
