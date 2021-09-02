const addCommentBtn = document.querySelector('.comment-button');

const fetchAddComment = () => {
  const textArea = document.querySelector('.add-text').value;
  const postId = window.location.search.split('=')[1];
  const data = { textArea };
  fetch(`/addcomment?postId=${postId}`, {
    method: 'POST',
    body: JSON.stringify(data),
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
};

addCommentBtn.addEventListener('click', fetchAddComment);
