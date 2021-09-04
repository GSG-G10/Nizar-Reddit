const fetchCookieAdmin = () => {
  const data = window.location.href.split('=')[1];
  fetch(`/cookieAdmin?name=${data}`, {
    method: 'GET',
  });
};
fetchCookieAdmin();
