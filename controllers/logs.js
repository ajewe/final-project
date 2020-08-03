const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//would be cool if mult. users could access same log
const getAllLogsByUser = (req, res) => {
  const userId = req.userId
  // let sql = "SELECT *, books.book FROM logs WHERE user_id = ? AND JOIN books WHERE logs.book_id = books.id"
  let sql = "SELECT logs.*, books.book FROM logs JOIN books WHERE logs.user_id = ? AND logs.book_id = books.id"
  sql = mysql.format(sql, [ userId ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getLogById = (req, res) => {
  const userId = req.userId
  let sql = "SELECT logs.*, books.book FROM logs JOIN books WHERE logs.id = ? AND logs.user_id = ? AND logs.book_id = books.id" 
  sql = mysql.format(sql, [ req.params.id, userId ])

  pool.query(sql, (err, log) => {
    if (err) return handleSQLError(res, err)
  
    //select from procedures with log id
    let sql = "SELECT * FROM procedures WHERE log_id = ?"
    sql = mysql.format(sql, [ req.params.id ])

    pool.query(sql, (err, procedures) => {
      if (err) return handleSQLError(res, err)
      return res.json({
        procedures: [...procedures],
        ...log[0]
      });
    })
  })
}

//insert into logs with user_id, insert into procedures with log_id
const createLog = (req, res) => {
  const userId = req.userId
  const { bookEntryNumber, bookId, rxnSketch, quickInfo, results, yield, lastUpdated } = req.body
  const rxnSketchJSONstring = JSON.stringify({ "fileData": rxnSketch.fileData, "fileType": rxnSketch.fileType })

  //this will generate the log_id
  let sql = "INSERT INTO logs (user_id, book_id, book_entry_number, rxn_sketch, quick_info, results, yield, last_updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  sql = mysql.format(sql, [ userId, bookId, bookEntryNumber, rxnSketchJSONstring, quickInfo, results, yield, lastUpdated ])

  pool.query(sql, (err, log) => {
    if (err) return handleSQLError(res, err)

    const logId = log.insertId
    const arrayOfProcedures = []

    req.body.procedures.map(p => {
      arrayOfProcedures.push([ logId, p.date, p.entry])
    })

    let sql = "INSERT INTO procedures (log_id, date, entry) VALUES ?"
    sql = mysql.format(sql, [ arrayOfProcedures ])

    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)

      return res.send({ msg: "Log Added!"})
    })
  })
}

const updateLogById = (req, res) => {
  const {  rxn_sketch, quick_info, results, yield, last_updated } = req.body
  const rxnSketchJSONstring = JSON.stringify({ "fileData": rxn_sketch.fileData, "fileType": rxn_sketch.fileType })
  let sql = "UPDATE logs SET rxn_sketch = ?, quick_info = ?, results = ?, yield = ?, last_updated = ? WHERE id = ?"
  sql = mysql.format(sql, [ rxnSketchJSONstring, quick_info, results, yield, last_updated, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)

    let queries = req.body.procedures.map((p) => {
      let sql = "UPDATE procedures SET date = ?, entry = ? WHERE id = ?"
      return mysql.format(sql, [ p.date, p.entry, p.id ])
    })

      pool.query(queries.join('; '), (err, results) => {
        if (err) return handleSQLError(res, err)
        return res.send({ msg: "Log Updated!" })
      })
    })
  }

module.exports = {
  getAllLogsByUser,
  getLogById,
  createLog,
  updateLogById,
}