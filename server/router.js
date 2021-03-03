'use strict';

const router = require('express').Router();
const plant = require('./controllers/plant');

router.get('/plants', plant.getPlants);
router.post('/plants', plant.postPlant);

module.exports = router;
