const
  mongoose = require('mongoose'),
  { Schema, model } = require('mongoose'),
  autoIncrement = require('mongoose-sequence')(mongoose),
  transactionSchema = new Schema({
    bankAccount: { type: String, required: true, index: true },
    type: { type: String, enum: ['withdrawal', 'deposit'], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now() }
  })

transactionSchema.plugin(autoIncrement, { inc_field: 'transactionId' })

module.exports = model('Transaction', transactionSchema)