const
  mongoose = require('mongoose'),
  keys = require('../config/keys'),
  URI = `mongodb+srv://${keys.db.user}:${keys.db.password}@mau-089mv.mongodb.net/${keys.db.db_name}?retryWrites=true&w=majority`

class Database {

  connect() {
    mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true })
      .then(db => console.log('Database connected.'))
      .catch(err => console.log(`Database error connection: ${err.message}`))
  }
}

module.exports = new Database()