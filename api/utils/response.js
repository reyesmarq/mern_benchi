const response = (req, res, status, data, errors) => {
  let err = []
  if (data === null) data = []
  if (typeof errors === 'string') err.push({ message: errors })
  if (typeof test === 'undefined') errors = err

  res.status(status.code).json({
    response: {
      code: status.code,
      status: status.status,
      description: status.description
    },
    data,
    errors: err
  })
}

module.exports = { response }