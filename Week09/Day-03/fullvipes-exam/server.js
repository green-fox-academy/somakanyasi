'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const PORT = 7000;

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '10!GFA25bbTp',
  database: 'matrixes',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/matrix', (req, res) => {
  let inputMatrix = req.body.matrix;
  if (isSquare(inputMatrix) && increasingByRows(inputMatrix)) {
    conn.query(`INSERT INTO matrixes (matrixNumbers) VALUES (?)`, [inputMatrix], (err, result) => {
      if (err) {
        console.log('Error connecting to database', err.message);
        res.status(500).send('Database error');
        return;
      }
      res.status(200).json({
        status: 'This matrix is increasing'
      })
    });
  } else {
    res.status(200).json({
      status: 'This matrix is not increasing'
    })
  }
});

app.get('/matrices', (req, res) => {
  conn.query(`SELECT * FROM matrixes`, (error, result) => {
    if (error) {
      console.log('Error connecting to database', error.message);
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json({
      matrixes: result,
    })
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const inputConverter = (inputMatrix) => {
  let matrixNumbers = [];
  let matrixRows = inputMatrix.split('\n');
  matrixRows.forEach(rows => {
    matrixNumbers.push(rows.split(' '));    
  });
  return matrixNumbers;
}

const isSquare = (inputMatrix) => {
  let matrixRows = inputMatrix.split('\n');
  for (let i = 0; i < matrixRows.length; i++) {
    if (matrixRows.length !== matrixRows[i].split(' ').length) {
      return false
    }
  }
  return true;
}

const increasingByRows = (inputMatrix) => {
  let matrixRows = inputMatrix.split('\n');
  let matrixNumbers = [];
  matrixRows.forEach(rows => {
    matrixNumbers.push(rows.split(' '));
  })
  for (let i = 0; i < matrixNumbers.length; i++) {
    for (let j = 0; j < matrixNumbers[i].length - 1; j++) {
      if (parseInt(matrixNumbers[i][j]) >= parseInt(matrixNumbers[i][j + 1])) {
        return false;
      }      
    }    
  }
  return true;
}

const increasingByColumns = (inputMatrix) => {
  let matrixRows = inputMatrix.split('\n');
  let matrixNumbers = [];
  matrixRows.forEach(rows => {
    matrixNumbers.push(rows.split(' '));
  })
  for (let i = 0; i < matrixNumbers.length; i++) {
    for (let j = 0; j < matrixNumbers[i].length; j++) {
      if (parseInt(matrixNumbers[i][j]) >= parseInt(matrixNumbers[i + 1][j])) {
        return false;
      }
    }
  }
  return true;
}
