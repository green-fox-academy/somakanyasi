window.onload = () => {
  let host = 'http://localhost:3000';
  const request = new XMLHttpRequest;
  request.open('GET', `${host}/api/v1/books`, true);

  let table = document.getElementById('table');
  let tableBody = document.getElementById('table-body');

  request.onload = () => {
    if (request.status === 200) {
      const bookData = JSON.parse(request.response);
      bookData.forEach(book => {
        let newRow = document.createElement('tr');
        tableBody.appendChild(newRow);
        console.log(book);
        for(let i = 0; i < 5; i++) {
          let newCell = document.createElement('td');
          newCell.innerText = Object.values(book)[i];
          newRow.appendChild(newCell);
        }
      });
    }
  }

  request.send();
}


// const renderHTML = (data) => {
//   let htmlString = '';
//   for (let i = 0; i < data.length; i++) {
//     htmlString += '<p>' + data[i].book_name + '<p>';

//   }
// }