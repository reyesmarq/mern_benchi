const
  bcrypt = require('bcryptjs'),
  { Schema, model } = require('mongoose'),
  userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // client: { type: String, required: true, index: true },
    created: { type: Date, default: Date.now() },
    updated: { type: Date, default: Date.now() }
  })

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(this.password, salt)
  this.password = passwordHash
  next()
})

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema)