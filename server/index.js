'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');
const connection = require('./models/index');

const app = express();
const PORT = 3001;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await connection;
    console.log('Connected to database 🗄'); // eslint-disable-line no-console
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} 🚀 `); // eslint-disable-line no-console
    });
  } catch (error) {
    console.log('Error:', error); // eslint-disable-line no-console
  }
})();
