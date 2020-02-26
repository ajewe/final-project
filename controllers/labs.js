const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getLabById = (req, res) => {
  let sql = "SELECT * FROM labs WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

//maybe make it so has one guy who is head of lab
const createLab = (req, res) => {
  const { name } = req.body
  let sql = "INSERT INTO labs (name) VALUES (?)"
  sql = mysql.format(sql, [ name ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

//but should probably only be done by 1 guy
const updateLabById = (req, res) => {
  const { name } = req.body
  let sql = "UPDATE labs SET name = ? WHERE id = ?"
  sql = mysql.format(sql, [ name, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

// or set to inactive?
// const deleteUserById = (req, res) => {
//   let sql = "DELETE FROM users WHERE id = ?"
//   sql = mysql.format(sql, [ req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = {
  getLabById,
  createLab,
  updateLabById,
  // deleteUserById
}