const logoutBtn = document.querySelector('.btn-logout');

logoutBtn.addEventListener('click', () => {
  fetch('/logout', {
    method: 'GET',
  }).then((result) => {
    window.location.href = result.url;
  });
});
