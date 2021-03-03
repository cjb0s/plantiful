'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/plant_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
