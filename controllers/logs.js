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
  const { bookName, bookEntryNumber, rxnSketch, quickInfo, results, yield, lastUpdated } = req.body
  const rxnSketchJSONstring = JSON.stringify({ "fileData": rxnSketch.fileData, "fileType": rxnSketch.fileType })

  //this will generate the log_id
  let sql = "INSERT INTO logs (user_id, book_name, book_entry_number, rxn_sketch, quick_info, results, yield, last_updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  sql = mysql.format(sql, [ userId, bookName, bookEntryNumber, rxnSketchJSONstring, quickInfo, results, yield, lastUpdated ])

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
  const { bookEntryNumber, rxnSketch, quickInfo, results, yield, lastUpdated } = req.body
  let sql = "UPDATE logs SET book_entry_number = ?, rxn_sketch = ?, quick_info = ?, results = ?, yield = ?, last_updated = ? WHERE id = ?"
  sql = mysql.format(sql, [ bookEntryNumber, rxnSketch, quickInfo, results, yield, lastUpdated, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)

    // const arrayOfProcedures = []
    let queries = req.body.procedures.map((p) => {
      let sql = "UPDATE procedures SET date = ?, entry = ? WHERE id = ?"
      return mysql.format(sql, [ p.date, p.entry, p.id ])
    })

      pool.query(queries.join('; '), (err, results) => {
        if (err) return handleSQLError(res, err)
        res.send('ok')
      })
    })
  }

module.exports = {
  getAllLogsByUser,
  getLogById,
  createLog,
  updateLogById,
}