const createTextArea = () => {
  const container = document.querySelector('.popular1');
  const contianerComments = bulidElement('div', container, 'continer-comments');
  const addComment = bulidElement('div', contianerComments, 'add-comment');
  const textArea = bulidElement('textarea', addComment, 'add-text');
  textArea.setAttribute('name', 'comment');
  const commentBtn = bulidElement('button', addComment, 'comment-button');
  commentBtn.textContent = 'comment';
  commentBtn.setAttribute('href', '/addcomment');
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
