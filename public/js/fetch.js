fetch('/postdata', {
  method: 'get',
})
  .then((response) => response.json())
  .then((data) => data.rows)
  .then((data) => data.forEach((element) => {
    generateFunction(element.likes, element.username, element.title, element.url, element.comments);
  }));
