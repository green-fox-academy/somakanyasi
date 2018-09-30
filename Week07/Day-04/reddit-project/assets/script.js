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
        console.log(element);

        let newPost = document.createElement('div');
        newPost.classList.add('newPost');
        newPost.id = element.id;
        postList.appendChild(newPost);

        let newVotingDiv = document.createElement('div');
        newVotingDiv.classList.add('voting');
        newPost.appendChild(newVotingDiv);

        let newUpButton = document.createElement('button');
        newUpButton.classList.add('voteBtn');
        newUpButton.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i>';
        newVotingDiv.appendChild(newUpButton);

        let newScoreCounter = document.createElement('div');
        newScoreCounter.classList.add('scoreNum');
        newScoreCounter.textContent = element.score;
        newVotingDiv.appendChild(newScoreCounter);

        let newDownButton = document.createElement('button');
        newDownButton.classList.add('voteBtn');
        newDownButton.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>';
        newVotingDiv.appendChild(newDownButton);

        let newPostBody = document.createElement('div');
        newPostBody.classList.add('postBody');
        newPost.appendChild(newPostBody);

        let newTitle = document.createElement('a');
        newTitle.href = element.url;
        newTitle.classList.add('postTitle');
        newTitle.textContent = element.title;
        newPostBody.appendChild(newTitle);

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