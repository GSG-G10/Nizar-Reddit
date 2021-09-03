const userNameOnCover = document.querySelector('.user-pro');
const username = window.location.search.split('=')[1];

admin.setAttribute('href', `/profilePage?name=${cookieUserName}`);
userNameOnCover.setAttribute('href', `/profilePage?name=${username}`);
