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

module.exports = {
  authMiddleware
}