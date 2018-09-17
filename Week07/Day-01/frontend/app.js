'use strict';

const express = require('express');
const app = express();

const path = require('path');

const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

//Doubling
app.get('/doubling', (req, res) => {
  let result = 0;
  let received = parseInt(req.query.input);
  if (req.query.input) {
    result = received * 2;
    res.json({
      "received": received,
      "result": result,
    });
  } else {
    res.json({
      error: "Please provide an input!",
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (!req.query.name) {
    res.json({
      error: "Please provide a name!"
    });
  } else {
    res.json({
      error: "Please provide a title!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`You're now listening to the smoothest tunes on port ${PORT}`);
})