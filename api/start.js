const api = require('./').handler
const consola = require('consola')

let config = {}
config.dev = !(process.env.NODE_ENV === 'production')

const host =  'localhost'
const port =  3001

// Listen the server
api.listen(port, host)
consola.ready({
  message: `API listening on http://${host}:${port}`,
  badge: true
})
