const createTextArea = () => {
  const container = document.querySelector('.popular1');
  const contianerComments = bulidElement('div', container, 'continer-comments');
  const addComment = bulidElement('div', contianerComments, 'add-comment');
  const textArea = bulidElement('textarea', addComment, 'add-text');
  textArea.setAttribute('name', 'comment');
  const commentBtn = bulidElement('button', addComment, 'comment-button');
  commentBtn.textContent = 'comment';
};
createTextArea();
