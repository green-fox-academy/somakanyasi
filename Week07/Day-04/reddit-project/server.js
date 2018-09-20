'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const PORT = 8080;

app.use('/assets', express.static('assets'));


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '10!GFA25bbTp',
  database: 'reddit',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.send('hello World!');
});

app.get('/posts', (req, res) => {
  conn.query(`SELECT * FROM posts`, (err, result) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    }
    res.json({
      posts: result,
    });
  });
});

app.post('/posts', jsonParser, (req, res) => {
  let postTitle = req.body.title;
  let postUrl = req.body.url;
  let postOwner = req.body.owner;

  if (postTitle && postUrl) {
    conn.query(`INSERT INTO posts (title, url, post_owner) VALUES ('${postTitle}', '${postUrl}', '${postOwner}');`, (err, result) => {
      if (err) {
        console.log('Error connecting to database', err.message);
        res.status(500).send('Database error');
        return;
      } conn.query(`SELECT * FROM posts WHERE post_id = ${result.insertId};`, (err, response) => {
        if (err) {
          console.log('Error connecting to database', err.message);
          res.status(500).send('Database error');
          return;
        }
        res.status(200).json({
          result: response,
        });
      });
    });
  }
});



app.put('/posts/:id/:upordown', (req, res) => {
  let id = req.params.id;
  let upordown = req.params.upordown;
  let action = '';

  if (upordown === 'upvote') {
    action = '+ 1';
  } else if (upordown === 'downvote') {
    action = '- 1';
  }

  conn.query(`UPDATE posts SET score = score ${action}, last_vote = ${action} WHERE post_id = ${id};`, (err, result) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    }
  });
  conn.query(`SELECT * FROM posts WHERE post_id = ${id};`, (err, updatedRow) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json({
      result: updatedRow,
    });
  });
});

app.put('/posts/:id', jsonParser, (req, res) => {
  let id = req.params.id;
  let postTitle = req.body.title;
  let postUrl = req.body.url;

  conn.query(`UPDATE posts SET title = '${postTitle}', url = '${postUrl}' WHERE post_id = ${id};`, (err, result) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    }
  });
  conn.query(`SELECT * FROM posts WHERE post_id = ${id};`, (err, updatedRow) => {
    if (err) {
      console.log('Error connecting to database', err.message);
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json({
      result: updatedRow,
    });
  });
  
});

app.delete('/posts/:id', (req, res) => {
  let id = req.params.id;
  if (id) {
    conn.query(`DELETE FROM posts WHERE post_id = ${id};`, (err, result) => {
      if (err) {
        console.log('Error connecting to database', err.message);
        res.status(500).send('Database error');
        return;
      }
      res.status(404).send('Post has been deleted from the table.');
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});