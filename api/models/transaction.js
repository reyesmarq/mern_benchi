const { Schema, model } = require('mongoose'),
  transactionSchema = new Schema({
    bankAccount: { type: String, required: true },
    type: { type: String, enum: ['withdrawal', 'deposit'], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now() }
  })

module.exports = model('Transaction', transactionSchema)