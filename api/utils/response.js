const response = (req, res, status, data, errors = []) => {
  if (data === null) data = []
  if (typeof errors === 'string') err.push({ message: errors })

  res.status(status.code).json({
    response: {
      code: status.code,
      status: status.status,
      description: status.description
    },
    data,
    errors
  })
}

module.exports = { response }