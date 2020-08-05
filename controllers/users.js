const mysql = require('mysql')
const bcrypt = require('bcrypt')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const checkIfExistingUser = (req, res, cb) => {
  const { email } = req.body
  let sql = "SELECT * FROM users WHERE email = ?"
  sql = mysql.format(sql, [ email ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)

    if (rows.length) {
      cb(true)
    } else {
      cb(false)
    }
  })
}

const saltRounds = 10

//would be cool if sent email request to join lab to head of lab 
const createUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body

  //check if email already in db
  checkIfExistingUser(req, res, (userExists) => {
    if (userExists) {
      res.send("User already exists")
    } else {
      // create user
      let sql = "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)"
      //hash password
      bcrypt.hash(password, saltRounds, (err, hash) => {
        sql = mysql.format(sql, [ firstName, lastName, email, hash ])

        pool.query(sql, (err, results) => {
          if (err) return handleSQLError(res, err)
          return res.json({ newId: results.insertId, results: results });
        })
      })
    }
  })
}

module.exports = {
  createUser
}