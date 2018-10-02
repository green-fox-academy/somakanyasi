'use strict';

window.onload = () => {
  const form = document.querySelector('form');
  const postId = localStorage.getItem('selectedPostId');
  const postTitle = localStorage.getItem('selectedPostTitle');
  const postUrl = localStorage.getItem('selectedPostUrl');
  const titleInput = document.querySelector('#post_title');
  const urlInput = document.querySelector('#post_url');

  form.action =`http://localhost:8080/posts/${postId}?_method=PUT`;
  titleInput.value = postTitle;
  urlInput.value = postUrl;
}
