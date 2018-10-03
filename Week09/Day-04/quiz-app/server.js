'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const randomNumGen = () => {
  return Math.floor(Math.random() * 10);
}

app.get('/game', (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
});

