const response = (req, res, status, data, err) => {
  res.status(status).json({ message: 'ok', data })
}

module.exports = { response }