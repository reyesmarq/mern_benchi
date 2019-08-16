const { Schema, model } = require('mongoose'),
  userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // client: { type: String, required: true, index: true }
  })

module.exports = model('User', userSchema)