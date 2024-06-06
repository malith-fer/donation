const Transaction = require('../models/Transaction');
const Donor = require('../models/Donor');
const Reason = require('../models/Reason');
const User = require('../models/User');

exports.createTransaction = async (req, res) => {
    try {
        const { cashierId, donorId, amount, date, receiptNumber, reasonId } = req.body;
        const transaction = await Transaction.create({
            cashierId,
            donorId,
            amount,
            date,
            receiptNumber,
            reasonId
        });
        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({
            include: [Donor, Reason, User]
        });
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
