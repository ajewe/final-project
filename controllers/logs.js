const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
//before getting info from sql db
const logs = require('../data/sampleLogs');

//each user can access their log history (all) and then by date
//this id needs to be user_id
const getAllLogs = (req, res) => {
  pool.query(`SELECT * FROM logs WHERE user_id = ${req.params.id}`, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

//pre-sql
const getLogs = ( req, res ) => {
  res.json(logs)
}

//?????????? This I'm using req.body, the one before i'm using req.params
const getLogByDate = (req, res) => {
  let sql = "SELECT * FROM logs WHERE date = ?"
  sql = mysql.format(sql, [ req.body.date ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

//would be cool if mult. users could access same log...
const createLog = (req, res) => {
  const { date, entry, user_id } = req.body
  let sql = "INSERT INTO logs (date, entry, user_id) VALUES (?, ?, ?)"
  sql = mysql.format(sql, [ date, entry, user_id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateLogById = (req, res) => {
  const { date, entry, user_id } = req.body
  let sql = "UPDATE logs SET date = ?, entry = ?, user_id = ? WHERE id = ?"
  sql = mysql.format(sql, [ date, entry, user_id, req.params.id ])

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
  // getAllUsers,
  getAllLogs,
  getLogByDate,
  createLog,
  updateLogById,
  // deleteUserById
  getLogs
}