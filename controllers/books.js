const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllBooks = (req, res) => {
  const userId = req.userId
  let sql = "SELECT book, id FROM books WHERE user_id = ?"
  sql = mysql.format(sql, [ userId ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)

    return res.json(rows);
  })
}

const createBook = (req, res) => {
  const userId = req.userId
  const { bookName } = req.body
  let sql = "INSERT INTO books (book, user_id) VALUES (?, ?)"
  sql = mysql.format(sql, [bookName, userId])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    let sql = "SELECT * FROM books WHERE id = ?"
    sql = mysql.format(sql, [rows.insertId])

    pool.query(sql, (err, rows) => {
      return res.json(rows[0])
    })
  })
}

const updateBookNameById = (req, res) => {
  const { bookName } = req.body
  let sql = "UPDATE books SET book = ? WHERE id = ?"
  sql = mysql.format(sql, [bookName, req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.send("Book Updated!")
  })
}

const checkIfLogsInBook = (req, res, cb) => {
    let sql = "SELECT * FROM logs WHERE book_id = ?"
    sql = mysql.format(sql, [req.params.id])
    
    pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)

    if (rows.length) {
      cb(true)
    } else {
      cb(false)
    }
  })
  }

const deleteBookById = (req, res) => {
  //check if book is empty / contains no logs
  checkIfLogsInBook(req, res, (bookContainsLogs) => {
    if (bookContainsLogs) {
      res.json({ message: "Book contains logs and cannot be deleted" })
    } else {
        let sql = "DELETE FROM books WHERE id = ?"
        sql = mysql.format(sql, [ req.params.id ])

        pool.query(sql, (err, results) => {
          if (err) return handleSQLError(res, err)

          return res.json({ message: `Deleted ${results.affectedRows} book(s)` });
        })
      }
  })
}

module.exports = {
  getAllBooks,
  createBook,
  updateBookNameById,
  deleteBookById
}
