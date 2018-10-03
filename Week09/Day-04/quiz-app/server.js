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

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '10!GFA25bbTp',
  database: 'quizapp',
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

const randomNumGen = () => {
  return Math.floor(Math.random() * 10) + 1;
}

app.get('/game', (req, res) => {
  let postId = randomNumGen();

  conn.query(`SELECT * 
  FROM questions 
  INNER JOIN answers ON questions.id = answers.question_id
  WHERE questions.id = ${postId}`, (err, result) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    }
    let question = '';
    let answers = [];
    let answerData = {}
    result.forEach(element => {
      question = element.question;
      answerData = {
        "question_id": element.question_id,
        "id": element.id,
        "answer_1": element.answer,
        'is_correct': element.is_correct
      }
      answers.push(answerData);
    })
    res.status(200).json({
      id: postId,
      question: question,
      answers: answers,
  })
  })
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
});

