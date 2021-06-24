const models = require('../models/');
const {sendData} = require('../helpers/');
const { Op } = require('sequelize')

const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports =  class Usuario {
   
  static authToken(req,res,next)
  {
    const authHead = req.headers['authorization'];
    const token = authHead && authHead.split(' ')[1];
    if (token == null) {
        return res.json(sendData(true,"Token no enviado",[],-1));
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) {
            return res.json(sendData(true,"Token incorrecto",error,-1));
        }
        console.log(user)
        next();

    });
  }
   
  static index(req, res) { 
        
   if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.json(sendData(false,'Credenciales invalidas',{},0));
    }

    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    
    let passToMd5 = crypto.createHash('md5').update(password).digest("hex");

         models
            .usuario
            .findOne({ where: {
                email: username,
                password: passToMd5,
                active: 1
                }})
            .then(result => {

                if (result) 
                {
                    let data = {
                                id: result.id,
                                name: result.name,
                                username: result.email,
                                exp: Math.floor(Date.now()/1000) + (60*10)}
                   
                    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
                    data.accessToken = accessToken
                    return res.json(sendData(false,'Todo OK',data,0));
                }else
                {
                    return res.json(sendData(false,'Credenciales invalidas',{},0));
                }
                
            
            })
            .catch(err => {
                return res.json(sendData(true,'Error Server',err.message,0));
            });
    }




}


