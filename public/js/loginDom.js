const login = document.querySelector('#login');

login.addEventListener('click', () => {
  const userName = document.querySelector('.user-name').value;
  const password = document.querySelector('.password').value;
  const errorMessage = document.querySelector('.error');
  errorMessage.style.visibility = 'hidden';
  errorMessage.textContent = 'update';

  const data = { username: userName, password };

  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
});
