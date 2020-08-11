const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const sessionRouter = require('./routers/session')
const logsRouter = require('./routers/logs');
const booksRouter = require('./routers/books')
const { authMiddleware } = require('./middleware')

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html'));

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.use('/user', usersRouter)
app.use('/login', sessionRouter)

app.use(authMiddleware)
app.use('/logs', logsRouter)
app.use('/books', booksRouter)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
