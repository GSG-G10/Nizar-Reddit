const createTextArea = () => {
  const container = document.querySelector('.popular1');
  const contianerComments = bulidElement('div', container, 'continer-comments');

  const addComment = bulidElement('div', contianerComments, 'auth1');
  const textArea = bulidElement('textarea', addComment, 'add-text');
  textArea.setAttribute('name', 'comment');

  const commentBtn = bulidElement('button', addComment, 'comment-button');
  commentBtn.textContent = 'comment';

  const notAuth = bulidElement('div', contianerComments, 'not-auth1');
  const containerToLogin = bulidElement('div', notAuth, 'container-login');
  const msgToLogin = bulidElement('p', containerToLogin, 'msg-login');
  msgToLogin.textContent = 'Do you want to add comment? well login to Reddit';
  const btnLogien = bulidElement('a', containerToLogin, 'btn-login1');
  btnLogien.setAttribute('href', '/login-page');
  btnLogien.textContent = 'login';
};
createTextArea();

const buildComment = (username, content) => {
  const contianerComments = document.querySelector('.continer-comments');
  const commentPart = bulidElement('div', contianerComments, 'comment-part');
  const userInfo = bulidElement('div', commentPart, 'user-commented');

  const photoUser = bulidElement('img', userInfo, 'img-user');
  photoUser.src = './icons/user.svg';

  const userName = bulidElement('p', userInfo, 'user-name1');
  userName.textContent = username;

  const contentComment = bulidElement('p', commentPart, 'comment-content');
  contentComment.textContent = content;
};
