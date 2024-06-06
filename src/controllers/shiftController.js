const Shift = require('../models/Shift');
const User = require('../models/User');

exports.startShift = async (req, res) => {
    try {
        const { cashierId, startTime, openingBalance } = req.body;
        const shift = await Shift.create({
            cashierId,
            startTime,
            openingBalance
        });
        res.status(201).json(shift);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.endShift = async (req, res) => {
    try {
        const { id, endTime, closingBalance } = req.body;
        const shift = await Shift.update({
            endTime,
            closingBalance
        }, {
            where: { id }
        });
        res.status(200).json(shift);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getShifts = async (req, res) => {
    try {
        const shifts = await Shift.findAll({
            include: [User]
        });
        res.status(200).json(shifts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
