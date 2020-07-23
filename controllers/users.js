const mysql = require('mysql')
const bcrypt = require('bcrypt')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

// Maybe in settings, would want to get user info
// const getUserById = (req, res) => {
//   let sql = "SELECT * FROM users WHERE id = ?"
//   sql = mysql.format(sql, [ req.params.id ])

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//   })
// }

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

// const updateUserById = (req, res) => {
//   const { firstName, lastName, email, lab_id } = req.body
//   let sql = "UPDATE users SET first_name = ?, last_name = ?, email = ?, lab_id = ? WHERE id = ?"
//   sql = mysql.format(sql, [ firstName, lastName, email, lab_id, req.params.id ])

//   pool.query(sql, (err, res) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

//delete user or just update as inactive user?
// const deleteUserById = (req, res) => {
//   let sql = "DELETE FROM users WHERE id = ?"
//   sql = mysql.format(sql, [ req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = {
  getAllUsers,
  // getUserById,
  createUser,
  // updateUserById,
  // deleteUserById
}