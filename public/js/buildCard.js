const bulidElement = (elementTag, parentElement, className) => {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  parentElement.appendChild(element);
  return element;
};

if (window.location.pathname === '/profilePage') {
  updateUserName();
}

const generateFunction = (postId, likes, username, title, url, comments, singlePost, postContent, profilePage, admin) => {
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

  const commentRemove = bulidElement('div', postInfo, 'comment-reomve');

  const commentInfo = bulidElement('div', commentRemove, 'comment-info');
  const commentIcon = bulidElement('img', commentInfo, 'comment-icon');
  commentIcon.src = './icons/comment.svg';

  const commentBtn = bulidElement('a', commentInfo, 'comment-btn');
  commentBtn.setAttribute('href', `/postPage?id=${postId}`);
  const commentsNumber = bulidElement('p', commentBtn, 'commtens-number');
  commentsNumber.textContent = `${comments} Comments`;

  if (admin) {
    const remveInfo = bulidElement('div', commentRemove, 'remove-info');
    const removeIcon = bulidElement('img', remveInfo, 'reomve-icon');
    removeIcon.src = './icons/remove.svg';
    const removeBtn = bulidElement('a', remveInfo, 'remove-btn');
    const removeText = bulidElement('p', removeBtn, 'reomve-text');
    removeText.textContent = 'Remove';
    // did fetch here just for read postId
    removeBtn.addEventListener('click', () => {
      fetch('/deletePost', {
        method: 'DELETE',
        body: JSON.stringify({ postId }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.redirected) {
            window.location.href = res.url;
          }
        });
    });

    const checkAdminCookie = () => {
      if (cookieAdmin === 'true') {
        remveInfo.setAttribute('style', 'display: flex;');
      } else if (cookieAdmin === 'false') {
        remveInfo.setAttribute('style', 'display: none;');
      }
    };
    checkAdminCookie();
  }

  // if (profilePage) {
  //   updateUserName();
  // }
};
