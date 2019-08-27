const
  bcrypt = require('bcryptjs'),
  { model, Schema } = require('mongoose'),
  customerSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    document_information: {
      type: { type: String, enum: ['personal_id', 'passport'], required: true },
      number: { type: String, required: true }
    },
    security_code: { type: String, required: true, select: false },
    // client: { type: String, required: true },
    creation_date: { type: Date, default: Date.now() },
    last_update: { type: Date, default: Date.now() }
  })

customerSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  const securityCode = await bcrypt.hash(this.security_code, salt)
  this.securityCode = securityCode
  next()
})

customerSchema.methods.matchSecurityCode = async function (securityCode) {
  return await bcrypt.compare(securityCode, this.security_code)
}

module.exports = model('Customer', customerSchema)