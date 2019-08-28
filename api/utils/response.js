const response = (req, res, status, data, errors = []) => {
  if (data === null) data = []

  res.status(status.code).json({
    status: {
      code: status.code,
      message: status.message
    },
    data,
    errors
  })
}

module.exports = { response }