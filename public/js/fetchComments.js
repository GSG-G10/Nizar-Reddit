const showCommentsData = () => {
  const id = window.location.search.split('=')[1];
  fetch(`/comments?id=${id}`, {
    method: 'get',
  }).then((data) => data.json())
    .then((data) => data.forEach((element) => {
      buildComment(element.username, element.content);
    }));
};
showCommentsData();
