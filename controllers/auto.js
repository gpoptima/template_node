const models = require('../models/');
const {sendData} = require('../helpers/');
const { Op } = require('sequelize')

module.exports =  class Auto {

    static index(req, res) { 

         models
            .auto
            .findAll({where:{estatus:1},
                include:[{as:'versiones',model:models.version}]})
            .then(result => {
                return res.json(sendData(false,'Todo OK',result,0));
            })
            .catch(err => {
                return res.json(sendData(true,'Error Server',err,0));
            });
    }


    static get(req, res) {

        const id = req.params.id;

        if (id <= 0 || isNaN(id)) {
            return res.json(sendData(true,'Error en id de auto',null,0));
        }

        models
            .auto
            .findByPk(id,{include:[{as:'versiones',model:models.version}]})
            .then(result => {
                return res.json(sendData(false,'Todo OK',result,0));
            })
            .catch(err => {
                return res.json(sendData(true,'Error Server',err,0));
            });
    }

    static create(req, res) {
       
        models
        .auto
        .create(req.body,{include:[{as:'versiones',model:models.version}]})
        .then(result => {

            return res.json(sendData(false,'Todo OK',result,0));
        
        })
        .catch(err => {
            return res.json(sendData(true,'Error Server',err,0));

        });

    }


    static update(req, res) { 

         const id = req.params.id;

        if (id <= 0 || isNaN(id)) {
            return res.json(sendData(true,'Error en id de auto',null,0));
        }

        models
        .auto
        .update(req.body,{where:{id:id}})
        .then(result => {
            return res.json(sendData(false,'Todo OK',result,0));
        })
        .catch(err => {
            return res.json(sendData(true,'Error Server',err,0));
        });
    }

    static delete(req, res) { 
    }


}


