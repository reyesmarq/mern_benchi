const
  express = require('express'),
  router = express.Router()

router.route('/')
  .get((req, res) => {
    res.status(400).json({ message: 'no content' })
  })

router.route('/*')
  .get((req, res) => res.status(404).json({ message: 'not found' }))

module.exports = router