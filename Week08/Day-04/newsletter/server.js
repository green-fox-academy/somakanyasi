'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(cors());

const PORT = 3000;

app.post('/signup', (req, res) => {
  res.json(`Thanks ${req.body.username} we will send updates to ${req.body.email}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
