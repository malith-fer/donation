const express = require('express');
const router = express.Router();
const shiftController = require('../controllers/shiftController');

router.post('/start', shiftController.startShift);
router.post('/end', shiftController.endShift);
router.get('/', shiftController.getShifts);

module.exports = router;
