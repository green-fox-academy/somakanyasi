window.onload = () => {
  const postRequest = new XMLHttpRequest;
  let host = 'http://localhost:8080';

  const fullContent = document.querySelector('#full-content');
  const postList = document.querySelector('#postList');
  const submitButton = document.querySelector('submit-button');


  postRequest.open('GET', `${host}/api/posts`, true);

  postRequest.onload = () => {
    if (postRequest.status === 200) {
      const sourceDatabase = JSON.parse(postRequest.response).posts;

      sourceDatabase.forEach(element => {
        console.log(element.title);

        let newPost = document.createElement('div');
        newPost.classList.add('newPost');
        newPost.id = element.id;
        postList.appendChild(newPost);

        let newVotingDiv = document.createElement('div');
        newVotingDiv.classList.add('voting');
        newPost.appendChild(newVotingDiv);

        let newUpButton = document.createElement('button');
        newUpButton.classList.add('upvoteBtn');
        newVotingDiv.appendChild(newUpButton);

        let newScoreCounter = document.createElement('div');
        newScoreCounter.classList.add('scoreNum');
        newScoreCounter.textContent = element.score;
        newVotingDiv.appendChild(newScoreCounter);

        let newDownButton = document.createElement('button');
        newDownButton.classList.add('downvoteBtn');
        newVotingDiv.appendChild(newDownButton);

        let newPostBody = document.createElement('div');
        newPostBody.classList.add('postBody');
        newPost.appendChild(newPostBody);

        let newTitle = document.createElement('h3');
        newTitle.textContent = element.title;
        newPostBody.appendChild(newTitle);

        let newDataRow = document.createElement('div');
        newDataRow.classList.add('dataRow');
        newPostBody.appendChild(newDataRow);

        let newOwner = document.createElement('p');
        newOwner.classList.add('postOwner');
        newOwner.textContent = element.owner;
        newDataRow.appendChild(newOwner);
      });

      console.log(source);
    }
  }

  postRequest.send();
}