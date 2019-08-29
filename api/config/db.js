const
  mongoose = require('mongoose'),
  { db: { user, password, dbName } } = require('../config/keys'),
  URI = `mongodb+srv://${user}:${password}@mau-089mv.mongodb.net/${dbName}?retryWrites=true&w=majority`

class Database {

  connect() {
    mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true })
      .then(db => console.log('Database connected.'))
      .catch(err => console.log(`Database error connection: ${err.message}`))
  }
}

module.exports = new Database()