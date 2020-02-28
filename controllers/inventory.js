const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//each user can access their inventory (all)
//this id needs to be lab_id (associated with user)
const getAllInventory = (req, res) => {

  pool.query(`SELECT * FROM inventory WHERE lab_id = ${req.body.id}`, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

//should get each item by name? i dunnnno

const createItem = (req, res) => {
  const { order_date, chemical, quantity, location, size, lab_id } = req.body
  let sql = "INSERT INTO inventory (order_date, chemical, quantity, location, size, lab_id) VALUES (?, ?, ?, ?, ?, ?)"
  sql = mysql.format(sql, [ order_date, chemical, quantity, location, size, lab_id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateItem = (req, res) => {
  const { order_date, chemical, quantity, location, size, lab_id } = req.body
  let sql = "UPDATE inventory SET order_date = ?, chemical = ?, quantity = ?, location = ?, size = ?, lab_id = ? WHERE id = ?"
  sql = mysql.format(sql, [ order_date, chemical, quantity, location, size, lab_id, req.params.id ])

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
  getAllInventory,
  createItem,
  updateItem,
  // deleteUserById
}