const login = document.querySelector('#login');

login.addEventListener('click', () => {
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
  const errorMessage = document.querySelector('.error');
  errorMessage.style.visibility = 'hidden';
  errorMessage.textContent = 'update';

  const data = { email, password };

  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.status === 200) {
        if (res.redirected) {
          window.location.href = res.url;
        }
      } else {
        res.json()
          .then((respon) => respon.message)
          .then((result) => {
            errorMessage.style.visibility = 'visible';
            errorMessage.textContent = result;
          });
      }
    })
    .catch((err) => err.message);
});
