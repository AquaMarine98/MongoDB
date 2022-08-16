const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res) {
    const filterUser = req.query.user || null;
    controller.getUser(filterUser)
        .then(user => {
            response.success(req, res, user, 201);
        })
        .catch(err => {
            response.error(req, res, 'Not found', 500, err);
        })
})

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        })
})

module.exports = router;