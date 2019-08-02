const { check, validationResult } = require('express-validator')

const reading = method => {
  switch (method) {
    case 'create_customer':
      return [
        check('firstName').not().isEmpty().withMessage('First name cannot be empty')
      ]
  }
}

const validate = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  next()
}

module.exports = { reading, validate }