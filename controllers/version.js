const models = require('../models/');
const {sendData} = require('../helpers/');
const { Op } = require('sequelize')


module.exports =  class Version {

    
    
    static index(req, res) { }

    /*
     |--------------------------------------------------------------------------
     | [GET]
     | /[model]/:id
     |--------------------------------------------------------------------------
     |
     |
     */
    static get(req, res) {

        const id = req.params.id;

        if (id <= 0 || isNaN(id)) {
            return res.json(sendData(true,'Error en id de version',null,0));
        }

        models
            .version
            .findByPk(id)
            .then(result => {
                return res.json(sendData(false,'Todo OK',result,0));
            })
            .catch(err => {
                return res.json(sendData(true,'Error Server',err,0));
            });
    }

    /*
     |--------------------------------------------------------------------------
     | [POST]
     | /[model]
     |--------------------------------------------------------------------------
     |
     |
     */
    static create(req, res) {
       
        models
        .version
        .create(req.body)
        .then(result => {

            return res.json(sendData(false,'Todo OK',result,0));
        
        })
        .catch(err => {
            return res.json(sendData(true,'Error Server',err,0));

        });

    }

    /*
     |--------------------------------------------------------------------------
     | [PUT]
     | /[model]/:id
     |--------------------------------------------------------------------------
     |
     |
     */
    static update(req, res) { 

         const id = req.params.id;

        if (id <= 0 || isNaN(id)) {
            return res.json(sendData(true,'Error en id de version',null,0));
        }

        models
        .version
        .update(req.body,{where:{id:id}})
        .then(result => {
            return res.json(sendData(false,'Todo OK',result,0));
        })
        .catch(err => {
            return res.json(sendData(true,'Error Server',err,0));
        });
    }

    /*
     |--------------------------------------------------------------------------
     | [DELETE]
     | /[model]/:id
     |--------------------------------------------------------------------------
     |
     |
     */
    static delete(req, res) { 
    }


}


