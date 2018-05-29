rethink = require('rethinkdb')

module.exports = {
  r: rethink,
  connect: () => rethink.connect({ host: 'localhost', port: 28015, db: 'test' })
}