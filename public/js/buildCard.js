const bulidElement = (elementTag, parentElement, className) => {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  parentElement.appendChild(element);
  return element;
};

const generateFunction = (postId, likes, username, title, url, comments, singlePost, postContent, profilePage) => {
  const container = document.querySelector('.container-posts');
  const containerLoading = document.querySelector('.lodaing-container');

  const card = bulidElement('div', container, 'card');

  const like = bulidElement('div', card, 'like');

  const upBtn = bulidElement('a', like, 'up-btn');
  upBtn.setAttribute('href', '/like');
  const up = bulidElement('img', upBtn, 'up');
  up.src = './icons/up.svg';

  const noLikes = bulidElement('p', like, 'no-likes');
  noLikes.textContent = likes;

  const downBtn = bulidElement('a', like, 'down-btn');
  downBtn.setAttribute('href', '/dislike');
  const down = bulidElement('img', downBtn, 'down');
  down.src = './icons/down.svg';

  const postInfo = bulidElement('div', card, 'post-inf');
  const userInfo = bulidElement('div', postInfo, 'user-info');

  const userIcon = bulidElement('img', userInfo, 'user-icon1');
  userIcon.src = './icons/user.svg';

  const userBtn = bulidElement('a', userInfo, 'user-btn');
  userBtn.setAttribute('href', `/profilePage?name=${username}`);
  const userName = bulidElement('h4', userBtn, 'user-name');
  userName.textContent = username;

  const postBtn = bulidElement('a', postInfo, 'post-btn');
  postBtn.setAttribute('href', `/postPage?id=${postId}`);
  const postTitle = bulidElement('p', postBtn, 'post-title');
  postTitle.textContent = title;

  const postImg = bulidElement('img', postInfo, 'post-img');
  postImg.setAttribute('alt', 'Post Photo');
  postImg.src = url;

  if (singlePost) {
    containerLoading.textContent = '';
    const contentSubSection = bulidElement('div', postInfo, 'post-content');
    const contentPost = bulidElement('p', contentSubSection, 'post-paragraph');
    contentPost.textContent = postContent;
  }
  const commentInfo = bulidElement('div', postInfo, 'comment-info');
  const commentIcon = bulidElement('img', commentInfo, 'comment-icon');
  commentIcon.src = './icons/comment.svg';

  const commentBtn = bulidElement('a', commentInfo, 'comment-btn');
  commentBtn.setAttribute('href', `/postPage?id=${postId}`);
  const commentsNumber = bulidElement('p', commentBtn, 'commtens-number');
  commentsNumber.textContent = `${comments} Comments`;
  if (profilePage) {
    updateUserName();
  }
};
