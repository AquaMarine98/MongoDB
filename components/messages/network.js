const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function(req, res) {
    //console.log(req.headers);
    /* res.header({
        "custom-header": "Valor personalizado",
    }) */
    response.success(req, res, 'Lista de mensajes', 201);
})
router.post('/', function(req, res) {

    controller.addMessage(req.body.user, req.body.message, req.body.id);

    if(req.query.error == "ok") {
        response.error(req, res, 'Error simulado', 500, 'Es solo una simulacion de errores');
    } else {
        response.success(req, res, 'Mensaje creado correctamente', 201);
    }
})
router.delete('/', function(req, res) {
    //console.log(req.query);
    //console.log(req.body);
    res.send('Mensaje ' + req.body.id + ' enviado correctamente.');
})

module.exports = router;