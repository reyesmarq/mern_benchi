const
  { model, Schema } = require('mongoose'),
  customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    localId: { type: String, required: true, unique: true },
    securityCode: { type: Number, required: true, min: 4, max: 4 },
    // client: { type: String, required: true },
    creationDate: { type: Date, default: Date.now() }
  })

module.exports = model('Customer', customerSchema)