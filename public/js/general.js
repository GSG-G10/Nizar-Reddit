const cookies = document.cookie;
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

const checkCookie = (coo) => {
  if (coo) {
    user();
  } else {
    visitor();
  }
};

checkCookie(cookies);
