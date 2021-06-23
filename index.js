const express = require('express')
const controllers = require('./controllers/');
const config = require('./config/');
const {restfull} = require('./helpers/');
const app = express()
const port = config[config.mode].port
app.use(express.json());

function authToken(req, res, next) {
    next();
}


restfull(app,'/auto',authToken, controllers.auto)
restfull(app,'/auto/version',authToken, controllers.version)


app.listen(port, () => {
  console.log(`Template Node listening at http://localhost:${port}`)
})