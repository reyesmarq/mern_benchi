const
  jwt = require('jsonwebtoken'),
  { jwt: { secret, iss, exp }  } = require('../config/keys')
  // tokenExpirationDate = Math.floor(Date.now() / 1000) + (60 * 60) // Need to change, and implement momentjs

/**
 * TODO- This function is currently taking the email, but could be taking more information
 * Need to get back to this later
 */
const generateToken = (user) => {
  let token = jwt.sign(
    /**
     * Posible jwt attributes
     * iss: issuer
     * sub: reason or identifier of the user
     * aud: whom going to receive the token exam: web, android, ios
     * exp: jwt expiration
     * nbf: incidates the moment when is going to start acepting the jwt
     * iat: when it was issued
     * jti: unique jwt id uuid
     */
    { 
      iss,
      sub: user.id,
      exp
    },
    secret
  )
  
  return token
}

module.exports = { generateToken }