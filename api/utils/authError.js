const
  { response } = require('../utils/response'),
  { UNAUTHORIZED, BAD_REQUEST, INTERNAL_SERVER_ERROR, EXPIRED_TOKEN } = require('../utils/resCodes')

const authError = (err, req, res, next) => {
  let status = UNAUTHORIZED

  switch (err.status) {
    case 400:
      status = BAD_REQUEST
      break
    default:
    case 401:
      status = UNAUTHORIZED
      break
    case 500:
      status = INTERNAL_SERVER_ERROR
      break
    case 'The token is expired':
      status = EXPIRED_TOKEN
      break
  }

  return response(req, res, status, null, status.description)
}

module.exports = { authError }