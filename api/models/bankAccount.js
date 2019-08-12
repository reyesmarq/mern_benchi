const { Schema, model } = require('mongoose'),
  bankAccountSchema = new Schema({
    number: { type: String, unique: true, required: true },
    customer: { type: String, required: true },
    balance: { type: Number, default: 5, min: 0 },
    creation_date: { type: Date, default: Date.now() },
    last_update: { type: Date, default: Date.now() }
  })

module.exports = model('BankAccount', bankAccountSchema)