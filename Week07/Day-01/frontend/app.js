'use strict';

const express = require('express');
const app = express();

const path = require('path');

const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json());

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

app.get('/appenda/:word', (req, res) => {
  res.json({
    "appended": req.params.word + 'a',
  });
});

function sumOfSequence(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + sumOfSequence(number - 1);
  }
}

function factorial(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

app.post('/dountil/:action', (req, res) => {
  const number = parseInt(req.body.until);

  if (req.params.action === 'sum') {
    res.json({
      result: `${sumOfSequence(number)}`
    });
  } else if (req.params.action === 'factor') {
    res.json({
      result: `${factorial(number)}`
    });
  } else if (typeof number !== number) {
    res.json({
      error: 'Please provide a number!'
    });
  }
});

app.post('/arrays', (req, res) => {
  let action = req.body.what;
  let numbers = req.body.numbers;

  if (action === 'sum') {
    let result = 0;
    numbers.forEach(element => {
      result += element;
    });
    res.json({
      result: `${result}`,
    });
  } else if (action === 'multiply') {
    let result = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      result = result * numbers[i];
    }
    res.json({
      result: `${result}`,
    });
  } else if (action === 'double') {
    numbers = numbers.map(element => { 
      return element * 2;
    });
    res.json({
      result: numbers,
    });
  } else {
    res.json({
      error: "Please provide what to do with the numbers!"
    });
  }
});

function yodaConverter (inputText) {
  let inputTextToLowerCase = inputText.toLowerCase();
  let textToArray = inputTextToLowerCase.split('. ');
  let twoDimensionalArray = [];
  textToArray.forEach(elem => {
    twoDimensionalArray.push(elem.split(' '));
  });
  for(let i = 0; i < twoDimensionalArray.length; i++) {
    for (let j = 0; j < twoDimensionalArray[i].length; j++) {
      if (j % 2 !== 0) {
        let tempElement = '';
        tempElement = twoDimensionalArray[i][j];
        twoDimensionalArray[i][j] = twoDimensionalArray[i][j - 1];
        twoDimensionalArray[i][j - 1] = tempElement;
      }
    }
  }
  let arrayWithJoinedSentences = twoDimensionalArray.map(element => {
   return element.join(' ');
  });
  arrayWithJoinedSentences[0] = arrayWithJoinedSentences[0].replace(arrayWithJoinedSentences[0].charAt(0), arrayWithJoinedSentences[0].charAt(0).toUpperCase());
  arrayWithJoinedSentences[1] = arrayWithJoinedSentences[1].replace(arrayWithJoinedSentences[1].charAt(0), arrayWithJoinedSentences[1].charAt(0).toUpperCase()); 

  let mumbleWords = ['OMG', 'bla', 'wow', 'err', 'niff', 'brr', 'vau']
  let randomMumble = mumbleWords[Math.floor(Math.random() * 7)];

  return `${arrayWithJoinedSentences[0]}. ${randomMumble}. ${randomMumble}. ${arrayWithJoinedSentences[1]}. ${randomMumble}..${randomMumble}..${randomMumble}.`
}

app.post('/sith', (req, res) => {
  if (req.body.text) {
    res.json({
      sith_text: yodaConverter(req.body.text),
    });
  } else {
    re.json({
      error: "Feed me some text you have to, padawan young you are. Hmmm.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`You're now listening to the smoothest tunes on port ${PORT}`);
});