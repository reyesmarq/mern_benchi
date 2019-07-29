const
  app = require('./app'),
  db = require('./config/db')

db.connect()

app.listen(
  app.get('port'),
  () => console.log(`api server running at port ${app.get('port')}`)
)