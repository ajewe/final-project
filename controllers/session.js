const mysql = require('mysql')
const bcrypt = require('bcrypt')
const pool = require('../sql/connection')
const jwt = require('jsonwebtoken')
const { handleSQLError } = require('../sql/error')

const createSession = (req, res) => {
  const { email, password } = req.body
  let sql = "SELECT * FROM users WHERE email = ?"
  sql = mysql.format(sql, [ email ])
  
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    if (!rows.length) return res.status(404).send('No user found')

    //only one user should exist
    const hash = rows[0].password
    bcrypt.compare(password, hash)
      .then(result => {
        if (!result) return res.status(400).send('Unauthorized')

        const data = { ...rows[0] }
        data.password = 'REDACTED'

        // this user is authenticated, need to create and send back a token
        const timestamp = new Date().getTime();
        const userObj = { userId: data.id, iat: timestamp}
        const token = jwt.sign(userObj, 'shhh')
        res.json({token: token})
      })
  })
}

module.exports = {
  createSession
}