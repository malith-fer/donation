const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/', reservationController.createReservation);
router.get('/:date', reservationController.getReservationsByDate);

module.exports = router;
