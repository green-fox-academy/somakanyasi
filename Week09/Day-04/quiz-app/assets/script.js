'use strict';

window.onload = () => {
  const displayedQuestion = document.querySelector('#current-question');
  const quizButton = document.querySelectorAll('.quiz-button');
  const firstAnswer = document.querySelector('#firstAns-button');
  const secondAnswer = document.querySelector('#secondAns-button');
  const thirdAnswer = document.querySelector('#thirdAns-button');
  const fourthAnswer = document.querySelector('#fourthAns-button');
  const scoreNumber = document.querySelector('#score-number');
  const resetButton = document.querySelector('#reset-button');

  const host = 'http://localhost:8080';

  const getCurrentScore = () => {
    return scoreNumber.textContent
  }

  let score = localStorage.getItem('score');

  fetch(`${host}/game`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then(resp => resp.json())
    .then(response => {
      scoreNumber.textContent = localStorage.getItem('score');
      displayedQuestion.textContent = response.question;
      firstAnswer.textContent = response.answers[0].answer_1;
      firstAnswer.setAttribute('name', response.answers[0].is_correct);
      secondAnswer.textContent = response.answers[1].answer_1;
      secondAnswer.setAttribute('name', response.answers[1].is_correct);
      thirdAnswer.textContent = response.answers[2].answer_1;
      thirdAnswer.setAttribute('name', response.answers[2].is_correct);
      fourthAnswer.textContent = response.answers[3].answer_1;
      fourthAnswer.setAttribute('name', response.answers[3].is_correct);
      quizButton.forEach(element => {
        if (element.name === '1') {
          element.addEventListener('click', (e) => {
            e.preventDefault();
            score = parseInt(localStorage.getItem('score'));
            score ++;
            scoreNumber.textContent = score;
            localStorage.setItem('score', score);
            element.style.background = 'green';
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          });
        } else {
          element.addEventListener('click', (e) => {
            e.preventDefault();
            scoreNumber.textContent = score;
            element.style.background = 'red';
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          });
        }
      });
      resetButton.addEventListener('click', () => {
        localStorage.setItem('score', 0);
      });
    });


}
