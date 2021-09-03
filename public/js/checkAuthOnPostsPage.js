const authBar1 = document.querySelector('.auth1');
const notAuthBar1 = document.querySelector('.not-auth1');

const user1 = () => {
  authBar1.style.display = 'flex';
  notAuthBar1.style.display = 'none';
};
const visitor1 = () => {
  authBar1.style.display = 'none';
  notAuthBar1.style.display = 'flex';
};
const checkCookie1 = (cookie1, cookie2) => {
  if (cookie1 && cookie2) {
    const userName = document.querySelector('.content-btn-user');
    userName.textContent = cookie2;
    user1();
  } else {
    visitor1();
  }
};

checkCookie1(cookieToken, cookieUserName);
