const showData = () => {
  const id = window.location.search.split('=')[1];
  fetch(`/post?id=${id}`, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => data.rows[0])
    .then((element) => {
      // eslint-disable-next-line max-len
      generateFunction(element.id, element.likes, element.username, element.title, element.url, element.comments, true);
    });
};
showData();
