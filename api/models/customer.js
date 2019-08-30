const
  bcrypt = require('bcryptjs'),
  mongoose = require('mongoose'),
  { model, Schema } = require('mongoose'),
  autoIncrement = require('mongoose-sequence')(mongoose),
  customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    documentInformation: {
      type: { type: String, enum: ['id', 'passport'], required: true },
      number: { type: String, required: true }
    },
    securityCode: { type: String, required: true, select: false },
    // client: { type: String, required: true },
    created: { type: Date, default: Date.now() },
    updated: { type: Date, default: Date.now() }
  })

customerSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  const securityCode = await bcrypt.hash(this.securityCode, salt)
  this.securityCode = securityCode
  next()
})

customerSchema.methods.matchSecurityCode = async function (securityCode) {
  return await bcrypt.compare(securityCode, this.securityCode)
}

customerSchema.plugin(autoIncrement, { inc_field: 'customerId' })

module.exports = model('Customer', customerSchema)