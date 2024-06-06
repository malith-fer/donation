const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reason = sequelize.define('Reason', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Reason;
