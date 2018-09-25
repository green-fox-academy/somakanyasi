'use strict';

const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '10!GFA25bbTp',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

conn.query(`SELECT * FROM book_mast;`, (err, result) => {
  if (err) {
    console.log('Error connecting to Db', err.message);
  }
  console.log('Data received from Db:\n');
  console.log(result);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/v1/books', (req, res) => {
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast 
  INNER JOIN author ON book_mast.aut_id = author.aut_id
  INNER JOIN category ON book_mast.cate_id = category.cate_id
  INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;`, (err, result) => {
    if (err) {
      console.log('Error connecting to Db', err.message);
      res.status(500).send('Database error');
      return;
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
