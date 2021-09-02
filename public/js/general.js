const cookies = document.cookie;
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

const checkCookie = (coo) => {
  if (coo) {
    user();
    const userName = document.querySelector('.content-btn-user');
    userName.textContent = cookies.split('=')[2];
  } else {
    visitor();
  }
};

checkCookie(cookies);
