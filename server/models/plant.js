'use strict';

const { Schema, model } = require('mongoose');

const PlantSchema = new Schema({
  common_name: { type: String, required: true },
  scientific_name: { type: String, required: true },
  origin: { type: String, required: true },
  water_days: { type: Number, required: true },
  light: { type: String, required: true },
  humidity: { type: String, required: true },
  temperature: {
    type: {
      max: Number,
      min: Number,
    },
    required: true,
  },
  feed_weeks: { type: Number, required: true },
  repot_years: { type: Number, required: true },
  pets: { type: String, required: true },
  difficulty: { type: Number, required: true },
  common_problems: {
    type: [
      {
        symptom: String,
        cause: String,
      },
    ],
    required: true,
  },
});

module.exports = model('Plant', PlantSchema);
