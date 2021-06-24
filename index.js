const express = require('express')
const controllers = require('./controllers/');
var cors = require('cors');
const config = require('./config/config.json');
const {restfull} = require('./helpers/');
require('dotenv').config()
const app = express()
const port = config[config.mode].port_server
app.use(express.json());

const whitelist = ['https://ejemplo.gpoptima.info','http://localhost:8080',config.mode==='development'?undefined:'']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    exposedHeaders: ['X-Requested-With', 'Content-Type', 'Authorization'],
    credentials: true
}

app.use(cors(corsOptions));


let authToken = controllers.usuario.authToken

restfull(app,'/auto/version',authToken, controllers.version)
restfull(app,'/auto',authToken, controllers.auto)
restfull(app,'/auto/version',authToken, controllers.version)
app.post('/login', (req,res,next)=>{next()} , controllers.usuario.index);


app.listen(port, () => {
  console.log(`Template Node listening at http://localhost:${port}`)
})