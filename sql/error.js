const handleSQLError = (res, err) => {
  return res.status(500).send(err);
}

module.exports = { handleSQLError }