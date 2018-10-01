'use strict';

window.onload = () => {
  const form = document.querySelector('form');
  console.log(form);
  const postId = localStorage.getItem('selectedPostId');
  console.log(postId);

  form.action =`http://localhost:8080/posts/${postId}?_method=PUT`;
}
