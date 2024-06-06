const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Donor = require('./Donor');
const Reason = require('./Reason');

const Transaction = sequelize.define('Transaction', {
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
    donorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Donor,
            key: 'id'
        },
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    receiptNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    reasonId: {
        type: DataTypes.INTEGER,
        references: {
            model: Reason,
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Transaction;
