const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

//would be cool if sent email request to join lab to head of lab
const createUser = (req, res) => {
  const { firstName, lastName, email, lab_id } = req.body
  let sql = "INSERT INTO users (first_name, last_name, email, lab_id) VALUES (?, ?, ?, ?)"
  sql = mysql.format(sql, [ firstName, lastName, email, lab_id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateUserById = (req, res) => {
  const { firstName, lastName, email, lab_id } = req.body
  let sql = "UPDATE users SET first_name = ?, last_name = ?, email = ?, lab_id = ? WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, email, lab_id, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

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
  getUserById,
  createUser,
  updateUserById,
  // deleteUserById
}