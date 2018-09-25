window.onload = () => {
  const request = new XMLHttpRequest;
  let host = 'http://localhost:8080';
  request.open('GET', `${host}/posts`, true)

  request.onload = () => {
    if (request.status === 200) {
      const request = JSON.parse(request.response);
      const table = document.querySelector('#table');
    }
  }
}