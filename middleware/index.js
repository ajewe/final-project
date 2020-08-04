// const mysql = require('mysql')
// const pool = require('../sql/connection')
// const { handleSQLError } = require('../sql/error')
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const token = req.header("token")
  try {
    let userObj = jwt.verify(token, 'shhh')
    //token is good
    req.userId = userObj.userId
    next();
  }
  catch {
    res.send("Unauthorized")
  }
  return
}

// const authenticate = (req, res, next) => {
//   const header = req.headers['authorization'] || ''
//   const [ bearer, token ] = header.split(' ')

//   try {
//     const decoded = jwt.verify(token, 'secret')
//     req.user = decoded
//     next()
//   } catch(err) {
//     res.sendStatus(401)
//   }
// }

module.exports = {
  authMiddleware
  // authenticate
}