const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit: 100,
        host: 'mysql://b237b5250e2574:ad48e812@us-cdbr-east-02.cleardb.com/heroku_0fd541684de6c3a?reconnect=true',
        user: 'b237b5250e2574',
        password: 'ad48e812',
        database: 'sys',
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