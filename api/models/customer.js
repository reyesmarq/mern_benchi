const
  bcrypt = require('bcryptjs'),
  { model, Schema } = require('mongoose'),
  customerSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    local_id: { type: String, required: true, unique: true },
    security_code: { type: String, required: true, select: false },
    // client: { type: String, required: true },
    creation_date: { type: Date, default: Date.now() },
    last_update: { type: Date, default: Date.now() }
  })

customerSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(this.security_code, salt)
  this.securityCode = passwordHash
  next()
})

customerSchema.methods.matchPassword = async function (securityCode) {
  return await bcrypt.compare(securityCode, this.security_code)
}

module.exports = model('Customer', customerSchema)