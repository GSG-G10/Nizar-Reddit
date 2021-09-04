const fetchDelete = () => {
  const postId = window.location.search.split('=')[1];

  fetch(`/deletePost?id=${postId}`, {
    method: 'DELETE',
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
