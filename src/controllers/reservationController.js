const Reservation = require('../models/Reservation');
const Location = require('../models/Location');
const Donor = require('../models/Donor');

exports.createReservation = async (req, res) => {
    try {
        const { donorId, locationId, date } = req.body;
        const reservation = await Reservation.create({
            donorId,
            locationId,
            date
        });
        res.status(201).json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getReservationsByDate = async (req, res) => {
    try {
        const { date } = req.params;
        const reservations = await Reservation.findAll({
            where: { date },
            include: [Donor, Location]
        });
        res.status(200).json(reservations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
