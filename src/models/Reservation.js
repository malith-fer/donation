const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Donor = require('./Donor');
const Location = require('./Location');

const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    donorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Donor,
            key: 'id'
        },
        allowNull: false
    },
    locationId: {
        type: DataTypes.INTEGER,
        references: {
            model: Location,
            key: 'id'
        },
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Reservation;
