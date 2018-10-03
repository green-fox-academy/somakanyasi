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
  if (inputMatrix) {
    res.status(200).json(
      isSquare(inputMatrix)
    );
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
