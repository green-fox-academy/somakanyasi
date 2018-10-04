'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
app.use(cors());

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
  WHERE questions.id = ?`, [postId], (err, result) => {
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

app.get('/questions', (req,res) => {
  conn.query(`SELECT * FROM questions`, (err, result) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json({
      result
    })
  })
});

app.post('/questions', (req, res) => {
  let newQuestion = req.body.question
  let newFirstAnswer = req.body.answer1
  let newSecondAnswer = req.body.answer2
  let newThirdAnswer = req.body.answer3
  let newFourthAnswer = req.body.answer4
  let isCorrect = req.body.is_correct

  conn.query(`INSERT INTO questions (question) VALUE ?;`, [newQuestion], (err, result) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    } conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,?)(?,?,?)(?,?,?)(?,?,?);`, [result.insertId, newFirstAnswer, isCorrect], [result.insertId, newSecondAnswer, isCorrect],   [result.insertId, newThirdAnswer, isCorrect], [result.insertId, newFourthAnswer, isCorrect], (err, response) => {
      if (err) {
        console.log('Error connecting to database', err.message);
        res.status(500).send('Database error');
        return;
      }
      conn.query(`SELECT * FROM questions INNER JOIN answers ON questions.id = answers.question_id WHERE questions.id = ?`, [result.insertId], (err, newResult) => {
        if (err) {
          console.log('Error connecting to database', err.message);
          res.status(500).send('Database error');
          return;
        }
        res.status(200).json({
          newResult
        })
        })
    });
  });
});

app.delete('/delete/:id', (req, res) => {
  let questionId = req.params.id;

  conn.query('DELETE FROM `questions`, `answers` USING `questions`, `answers` WHERE questions.id = answers.question_id AND questions.id = ? AND answers.question_id = ?', [questionId, questionId], (err, result) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    }
    res.status(200).send(`The number ${questionId} question has been removed from database.`)
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
});

