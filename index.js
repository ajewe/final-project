const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const sessionRouter = require('./routers/session')
const logsRouter = require('./routers/logs');
const booksRouter = require('./routers/books')
// const labsRouter = require('./routers/labs');
// const inventoryRouter = require('./routers/inventory');
const { authMiddleware } = require('./middleware')

const app = express();
app.use(cors())

const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/user', usersRouter)
app.use('/login', sessionRouter)

// app.use('/labs', labsRouter)
// app.use('/inventory', inventoryRouter)

app.use(authMiddleware)
app.use('/logs', logsRouter)
// app.use('/procedures', proceduresRouter)
app.use('/books', booksRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
