const { Schema, model } = require('mongoose'),
  bankAccountSchema = new Schema({
    number: { type: String, unique: true, required: true },
    customer: { type: String, required: true, index: true },
    balance: { type: Number, default: 5, min: 0 },
    created: { type: Date, default: Date.now() },
    updated: { type: Date, default: Date.now() }
  })

module.exports = model('BankAccount', bankAccountSchema)