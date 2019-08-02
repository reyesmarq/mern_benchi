const
  bcrypt = require('bcryptjs'),
  { model, Schema } = require('mongoose'),
  customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    localId: { type: String, required: true, unique: true },
    securityCode: { type: String, required: true },
    // client: { type: String, required: true },
    creationDate: { type: Date, default: Date.now() }
  })

customerSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(this.securityCode, salt)
  this.securityCode = passwordHash
  next()
})

customerSchema.methods.matchPassword = async function (securityCode) {
  return await bcrypt.compare(securityCode, this.securityCode)
}

module.exports = model('Customer', customerSchema)