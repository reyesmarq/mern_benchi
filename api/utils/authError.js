const
  { response } = require('../utils/response'),
  { UNAUTHORIZED, BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('../utils/resCodes')

const authError = (err, req, res, next) => {
  if (err.status === 400) return response(req, res, BAD_REQUEST, null, BAD_REQUEST.description)
  if (err.status === 500) return response(req, res, INTERNAL_SERVER_ERROR, null, INTERNAL_SERVER_ERROR.description)
  if (err.status === 401) return response(req, res, UNAUTHORIZED, null, 'Email or password does not match')
}

module.exports = { authError }