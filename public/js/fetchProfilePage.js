const showPostsUser = () => {
  const username = window.location.search.split('=')[1];
  fetch(`/profileposts?name=${username}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        generateFunction(element.id, element.likes, element.username, element.title, element.url, element.comments, false, null, true, true);
      });
    });
};

showPostsUser();
