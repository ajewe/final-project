const express = require("express");
var cors = require('cors')
const path = require('path')
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const sessionRouter = require('./routers/session')
const logsRouter = require('./routers/logs');
const booksRouter = require('./routers/books')
const { authMiddleware } = require('./middleware')

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 4001;

app.use('/api/user', usersRouter)
app.use('/api/login', sessionRouter)

app.use('/api/logs', authMiddleware, logsRouter)
app.use('/api/books', authMiddleware, booksRouter)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
