const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllBooks = (req, res) => {
  const userId = req.userId
  let sql = "SELECT book FROM books WHERE user_id = ?"
  sql = mysql.format(sql, [ userId ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(userId)
    console.log(rows)
    return res.json(rows);
  })
}

// const createBook = (req, res) => {

// }

module.exports = {
  getAllBooks
}