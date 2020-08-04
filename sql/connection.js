const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit: 100,
        host: 'ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'cf32f6i5cuoo8sz4',
        password: 'jb7d7pse0ka4rq5g',
        database: 'aqdsdg3f64t7x685',
        multipleStatements: true
      }

      if (process.env.NODE_ENV === 'production' && process.env.CLOUD_INSTANCE) {
        console.log(`connect socket: ${process.env.CLOUD_INSTANCE}`)
        config.socketPath = `/cloudsql/${process.env.CLOUD_INSTANCE}`
      }

      this.pool = mysql.createPool(config)

      this.pool.on('connection', function (connection) {
        console.log('connected to mysql')
      });

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;