'use strict';

window.onload = () => {
  const deleteRequest = new XMLHttpRequest;

  const allQuestions = document.querySelector('#all-questions');

  const host = 'http://localhost:8080';

  const deleteQuestion = (postId) => {
    deleteRequest.open('DELETE', `${host}/questions/${postId}`, true);
    deleteRequest.onload = () => {
      if (deleteRequest.status === 200) {
        const sourcePost = JSON.parse(deleteRequest.response);
        console.log(sourcePost);
      }
    }
    deleteRequest.send();
  }

  fetch(`${host}/questions`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  })
  .then(resp => resp.json())
  .then(response => {
    response.result.forEach(element => {
      
      let newQuestionBox = document.createElement('div');
      newQuestionBox.classList.add('question-box');
      allQuestions.appendChild(newQuestionBox);

      let newQuestion = document.createElement('div');
      newQuestion.classList.add('question');
      newQuestion.textContent = element.question;
      newQuestionBox.appendChild(newQuestion);

      let newDeleteButton = document.createElement('button');
      newDeleteButton.classList.add('delete-button');
      newDeleteButton.textContent = 'delete';
      newQuestionBox.appendChild(newDeleteButton);

      newDeleteButton.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none';
        console.log(element.id);
        deleteQuestion(element.id);
      });
    })
  })
}
