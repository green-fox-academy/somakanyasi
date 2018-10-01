'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const methOverride = require('method-override');
const PORT = 8080;

app.use(cors());
app.use(methOverride('_method'));
app.use('/assets', express.static('assets'));

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

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
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, 'newpost.html'));
});

app.get('/update/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'updatepost.html'))
});

app.get('/api/posts', (req, res) => {
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

app.post('/posts', (req, res) => {
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
        res.status(200).redirect('/');
      });
    });
  };
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

app.put('/posts/:id', (req, res) => {
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
    res.status(200).redirect('/');
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
      res.status(204).send(`Post number ${id} has been deleted from the table.`);
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
