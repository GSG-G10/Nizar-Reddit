const updateUserName = () => {
  const userName = document.querySelector('.user-name');
  const userProfile = document.querySelector('.user-pro');
  userProfile.textContent = userName.textContent;
};
