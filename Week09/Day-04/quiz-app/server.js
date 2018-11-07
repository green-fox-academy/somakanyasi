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
  multipleStatements: true,
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

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/questions.html'))
});

const randomNumGen = () => {
  return Math.floor(Math.random() * 9) + 1;
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

  console.log(req.body);
  console.log(req.body.new_answer);

  let whichOneIsCorrect = [];
  const correctAnswerGetter = () => {
    if (req.body.new_answer === 'radio1') {
      whichOneIsCorrect = [1, 0, 0, 0];
    } else if (req.body.new_answer === 'radio2') {
      whichOneIsCorrect = [0, 1, 0, 0];
    } else if (req.body.new_answer === 'radio3') {
      whichOneIsCorrect = [0, 0, 1, 0];
    } else if (req.body.new_answer === 'radio4') {
      whichOneIsCorrect = [0, 0, 0, 1];
    }
    return whichOneIsCorrect;
  }

  let newQuestion = req.body.new_question
  let newFirstAnswer = req.body.answer1
  let newSecondAnswer = req.body.answer2
  let newThirdAnswer = req.body.answer3
  let newFourthAnswer = req.body.answer4

  conn.query(`INSERT INTO questions (question) VALUES (?);`, [newQuestion], (err, result) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    } conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (${result.insertId}, '${newFirstAnswer}', ${correctAnswerGetter()[0]}),(${result.insertId}, '${newSecondAnswer}', ${correctAnswerGetter()[1]}),(${result.insertId}, '${newThirdAnswer}', ${correctAnswerGetter()[2]}),(${result.insertId}, '${newFourthAnswer}', ${correctAnswerGetter()[3]});`, (err, response) => {
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
        res.status(200).redirect('/manage');
        })
    });
  });
});

app.delete('/questions/:id', (req, res) => {
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

