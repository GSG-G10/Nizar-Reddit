const updateUserName = () => {
  const userName = window.location.href.split('=')[1];
  const userProfile = document.querySelector('.user-pro');
  userProfile.textContent = userName;
};
