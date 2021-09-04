const btnCreate1 = document.querySelector('.btn-create1');

btnCreate1.addEventListener('click', () => {
  const postTitle = document.querySelector('#post-title').value;
  const postUrl = document.querySelector('#post-url').value;
  const postContent = document.querySelector('#post-content').value;

  const data = { postTitle, postUrl, postContent: `${postContent}` };

  fetch('/insertPost', {
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
});
