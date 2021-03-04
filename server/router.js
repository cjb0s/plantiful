'use strict';

const router = require('express').Router();
const plant = require('./controllers/plant');
const userPlant = require('./controllers/userPlant');

router.get('/plants', plant.getPlants);
router.get('/plants/:name', plant.findPlant);
router.post('/plants', plant.postPlant);

router.get('/userplants', userPlant.getUserPlants);
router.post('/userplants', userPlant.postUserPlant);

module.exports = router;
