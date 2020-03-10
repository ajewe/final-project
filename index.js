const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const logsRouter = require('./routers/logs');
const labsRouter = require('./routers/labs');
const inventoryRouter = require('./routers/inventory');
// const { logger } = require('./middleware')

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
// app.use(logger)
app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/logs', logsRouter)
app.use('/labs', labsRouter)
app.use('/inventory', inventoryRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
