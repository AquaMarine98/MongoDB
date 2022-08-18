const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

const upload = multer({
    dest: 'public/files/',
})

router.get('/', function(req, res) {
    const filterUser = req.query.user || null;
    controller.getMessages(filterUser)
        .then((messageList) => {
            response.success(req, res, messageList, 201);
        })
        .catch(err => {
            response.error(req, res, 'Unexpected error', 500, err);
        })
})
router.post('/', upload.single('file'), function(req, res) {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file || null)
        .then((info) => {
            response.success(req, res, info, 201);
        })
        .catch(err => {
            response.error(req, res, 'Error simulado', 500, 'Es solo una simulacion de errores');
            console.log(err)
        })
})
router.patch('/:id', function(req, res) {
    controller.patchMessage(req.params.id, req.body.message)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Hubo un error', 500);
        });
})
router.delete('/:id', function(req, res) {
    const id = req.params.id;
    controller.deleteMessage(id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(err => {
            response.error(req, res, 'Hubo un error', 500);
        })
})

module.exports = router;