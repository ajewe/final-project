const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//would be cool if mult. users could access same log
const getAllLogsByUser = (req, res) => {
  const userId = req.userId
  let sql = "SELECT * FROM logs WHERE user_id = ?"
  sql = mysql.format(sql, [ userId ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getLogById = (req, res) => {
  const userId = req.userId
  let sql = "SELECT * FROM logs WHERE id = ? AND user_id = ?"
  sql = mysql.format(sql, [ req.params.id, userId ])

  pool.query(sql, (err, log) => {
    if (err) return handleSQLError(res, err)
  
    //select from procedures with log id
    let sql = "SELECT date, entry FROM procedures WHERE log_id = ?"
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
  const { bookName, bookEntryNumber, rxnSketch, quickInfo, results, yield, lastUpdated } = req.body
  
  //this will generate the log_id
  let sql = "INSERT INTO logs (user_id, book_name, book_entry_number, rxn_sketch, quick_info, results, yield, last_updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  sql = mysql.format(sql, [ userId, bookName, bookEntryNumber, rxnSketch, quickInfo, results, yield, lastUpdated ])

  pool.query(sql, (err, log) => {
    if (err) return handleSQLError(res, err)

    const logId = log.insertId
    const arrayOfProcedures = []

    req.body.procedures.map(p => {
      arrayOfProcedures.push([ logId, p.date, p.entry])
    })

    let sql = "INSERT INTO procedures (log_id, date, entry) VALUES ?"
    sql = mysql.format(sql, [ arrayOfProcedures ])

    pool.query(sql, (err, procedures) => {
      if (err) return handleSQLError(res, err)
      return res.send("Log Added!")
    })
  })
}

// const updateLogById = (req, res) => {
//   const { date, entry, user_id } = req.body
//   let sql = "UPDATE logs SET date = ?, entry = ?, user_id = ? WHERE id = ?"
//   sql = mysql.format(sql, [ date, entry, user_id, req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

module.exports = {
  getAllLogsByUser,
  getLogById,
  createLog,

  // updateLogById,
}