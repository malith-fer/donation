const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Shift = sequelize.define('Shift', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cashierId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE
    },
    openingBalance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    closingBalance: {
        type: DataTypes.DECIMAL(10, 2)
    }
}, {
    timestamps: true
});

module.exports = Shift;
