const { check, validationResult } = require('express-validator')

const reading = method => {
  switch (method) {
    case 'create_customer':
      return [
        check('firstName').not().isEmpty().withMessage('First name cannot be empty'),
        check('lastName').not().isEmpty().withMessage('Last name cannot be empty'),
        check('localId').not().isEmpty().withMessage('Local Id cannot be empty'),
        check('securityCode')
          .not().isEmpty().withMessage('Security code cannot be empty')
          .isLength({ min: 4, max: 4 }).withMessage('Security code must be 4 digit long'),
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