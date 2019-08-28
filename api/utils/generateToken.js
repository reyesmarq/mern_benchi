const
  jwt = require('jsonwebtoken'),
  { jwt_secret } = require('../config/keys'),
  tokenExpirationDate = Math.floor(Date.now() / 1000) + (60 * 60) // Need to change, and implement momentjs

/**
 * TODO- This function is currently taking the email, but could be taking more information
 * Need to get back to this later
 */
const generateToken = (user) => {
  console.log(user)
  let token = jwt.sign(
    { exp: tokenExpirationDate, issuer: 'Mern Benchi' },
    jwt_secret
  )
  
  return token
}

module.exports = { generateToken }