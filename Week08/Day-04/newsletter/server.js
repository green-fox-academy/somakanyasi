'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

