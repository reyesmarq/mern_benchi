const
  { check, validationResult } = require('express-validator'),
  { BAD_REQUEST } = require('../config/resCodes'),
  { response } = require('../utils/response')

const reading = method => {
  switch (method) {
    case 'create_customer':
      return [
        check('first_name').not().isEmpty().withMessage('First name cannot be empty'),
        check('last_name').not().isEmpty().withMessage('Last name cannot be empty'),
        // check('local_id').not().isEmpty().withMessage('Local Id cannot be empty'),
        check('security_code')
          .not().isEmpty().withMessage('Security code cannot be empty')
          .isLength({ min: 4, max: 4 }).withMessage('Security code must be 4 digit long'),
      ]
  }
}

const validate = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    // return res.status(422).json({ errors: errors.array() })
    return response(req, res, BAD_REQUEST, null, errors.array())
  }

  next()
}

module.exports = { reading, validate }