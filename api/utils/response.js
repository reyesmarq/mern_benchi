const response = (req, res, status, data, err = []) => {
  if (data == null) data = []
  
  res.status(status.code).json({
    status: {
      code: status.code,
      message: status.message
    },
    data,
    err
  })
}

module.exports = { response }