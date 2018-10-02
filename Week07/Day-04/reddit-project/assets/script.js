'use strict';

window.onload = () => {
  const postRequest = new XMLHttpRequest;
  const upvoteRequest = new XMLHttpRequest;
  const downvoteRequest = new XMLHttpRequest;
  const deleteRequest = new XMLHttpRequest;
  let host = 'http://localhost:8080';

  const postList = document.querySelector('#postList');
  const submitNewPost = document.querySelector('#submitNewPost');
  const bounceNum = document.querySelector('.bounceNum');

  let bounce = document.querySelector('.bounceBtn');
  let basketball = document.getElementById('basketball');
  let topPosition = 0;
  let bounceCounter = 0;

  let homerAudio = new Audio("/assets/sounds/Cartoon10.wav");
  let bounceAudio = new Audio("/assets/sounds/BOUNCE1.wav");
  let voteAudio = new Audio("/assets/sounds/thankyouForYourVote.m4a");
  let kandalloAudio = new Audio("/assets/sounds/Kandallo.m4a")

  function changeTop() {
    topPosition += 400;
    basketball.style.backgroundPosition = topPosition + 'px';
  }

  bounce.addEventListener('click', () => {
    bouncing();
    bounceAudio.currentTime = 0;
    bounceAudio.play();
    bounceNum.textContent ='';
    bounceCounter ++;
    bounceNum.textContent = bounceCounter;
  });

  function bouncing() {
    var time = 0;
    for (var i = 0; i < 6; i++) {
      time += 100;
      setTimeout(function () {
        changeTop();
      }, time)
    }
  }

  submitNewPost.onclick = () => {
    location.href = `${host}/submit`;
  }

  const upvote = (postId) => {
    upvoteRequest.open('PUT', `${host}/posts/${postId}/upvote`, true);
    upvoteRequest.onload = () => {
      if (upvoteRequest.status === 200) {
        const sourcePost = JSON.parse(upvoteRequest.response);
        console.log(sourcePost);
      }
    }
    upvoteRequest.send();
  }

  const downvote = (postId) => {
    downvoteRequest.open('PUT', `${host}/posts/${postId}/downvote`, true);
    downvoteRequest.onload = () => {
      if (downvoteRequest.status === 200) {
        const sourcePost = JSON.parse(upvoteRequest.response);
        console.log(sourcePost);
      }
    }
    downvoteRequest.send();
  }

  const deletePost = (postId) => {
    deleteRequest.open('DELETE', `${host}/posts/${postId}`, true);
    deleteRequest.onload = () => {
      if (deleteRequest.status === 200) {
        const sourcePost = JSON.parse(deleteRequest.response);
        console.log(sourcePost);
      }
    }
    deleteRequest.send();
  }

  postRequest.open('GET', `${host}/api/posts`, true);

  postRequest.onload = () => {
    if (postRequest.status === 200) {
      const sourceDatabase = JSON.parse(postRequest.response).posts;

      sourceDatabase.forEach(element => {

        let newPost = document.createElement('div');
        newPost.classList.add('newPost');
        newPost.id = element.post_id;
        postList.appendChild(newPost);

        let newVotingDiv = document.createElement('div');
        newVotingDiv.classList.add('voting');
        newPost.appendChild(newVotingDiv);

        let newUpButton = document.createElement('button');
        newUpButton.classList.add('voteBtn', 'upvoteBtn');
        newUpButton.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i>';
        newVotingDiv.appendChild(newUpButton);

        newUpButton.addEventListener('click', () => {
          voteAudio.play();
          upvote(newUpButton.parentElement.parentElement.id);
          bouncing();
          newScoreCounter.textContent = Number(newScoreCounter.textContent) + 1;
        });

        let newScoreCounter = document.createElement('div');
        newScoreCounter.classList.add('scoreNum');
        newScoreCounter.textContent = element.score;
        newVotingDiv.appendChild(newScoreCounter);

        let newDownButton = document.createElement('button');
        newDownButton.classList.add('voteBtn', 'downvoteBtn');
        newDownButton.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>';
        newVotingDiv.appendChild(newDownButton);

        newDownButton.addEventListener('click', () => {
          kandalloAudio.play();
          downvote(newDownButton.parentElement.parentElement.id);
          bouncing();
          newScoreCounter.textContent = Number(newScoreCounter.textContent) - 1;
        });

        let newPostBody = document.createElement('div');
        newPostBody.classList.add('postBody');
        newPost.appendChild(newPostBody);

        let newFuctionRow = document.createElement('div');
        newFuctionRow.classList.add('functionRow');
        newPostBody.appendChild(newFuctionRow)

        let newTitle = document.createElement('a');
        newTitle.href = element.url;
        newTitle.classList.add('postTitle');
        newTitle.textContent = element.title;
        newFuctionRow.appendChild(newTitle);

        let newToolButtons = document.createElement('div');
        newToolButtons.classList.add('toolBtns');
        newFuctionRow.appendChild(newToolButtons);

        let newEditButton = document.createElement('button');
        newEditButton.classList.add('editBtn');
        newEditButton.innerHTML = '<i class="far fa-edit"></i>';
        newToolButtons.appendChild(newEditButton);

        newEditButton.onclick = () => {
          localStorage.setItem('selectedPostId', element.post_id);
          localStorage.setItem('selectedPostTitle', element.title);
          localStorage.setItem('selectedPostUrl', element.url);
          location.href = `${host}/update/${element.post_id}`;
        }

        let newDeleteButton = document.createElement('button');
        newDeleteButton.classList.add('deleteBtn');
        newDeleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        newToolButtons.appendChild(newDeleteButton);

        newDeleteButton.addEventListener('click', () => {
          homerAudio.play();
          newDeleteButton.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
          deletePost(element.post_id);
        });

        let newDataRow = document.createElement('div');
        newDataRow.classList.add('dataRow');
        newPostBody.appendChild(newDataRow);

        let newOwner = document.createElement('p');
        newOwner.classList.add('postOwner');
        newOwner.textContent = `Posted by: ${element.post_owner}`;
        newDataRow.appendChild(newOwner);

        let newTimestamp = document.createElement('p');
        newTimestamp.classList.add('postTimestamp');
        newTimestamp.textContent = new Date(element.post_timestamp).toDateString();
        newDataRow.appendChild(newTimestamp);
      });
    }
  }
  postRequest.send();
}
