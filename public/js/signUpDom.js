const submit = document.querySelector('#signup');

submit.addEventListener('click', () => {
  const userName = document.querySelector('.user-name').value;
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
  const confirm = document.querySelector('.confirm-password').value;
  const errorMessage = document.querySelector('.error');
  errorMessage.style.visibility = 'hidden';
  errorMessage.textContent = 'update';

  const data = {
    username: userName, email, password, confirm,
  };
  fetch('/signup', {
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
          .then((respon) => {
            errorMessage.style.visibility = 'visible';
            errorMessage.textContent = respon;
          });
      }
    })
    .catch((err) => (err.message));
});
