const
  { response } = require('../utils/response'),
  { UNAUTHORIZED, BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('../utils/resCodes')

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
  }

  return response(req, res, status, null, status.description)
}

module.exports = { authError }