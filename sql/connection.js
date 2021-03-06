const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config();

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'aqdsdg3f64t7x685',
        multipleStatements: true
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