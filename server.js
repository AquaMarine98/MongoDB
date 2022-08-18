const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const routes = require('./network/routes');

db('mongodb://AquaMARINE:Gianfranco3002@ac-notzslf-shard-00-00.kk9jkwo.mongodb.net:27017,ac-notzslf-shard-00-01.kk9jkwo.mongodb.net:27017,ac-notzslf-shard-00-02.kk9jkwo.mongodb.net:27017/?ssl=true&replicaSet=atlas-858m2b-shard-0&authSource=admin&retryWrites=true&w=majority');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

routes(app);

app.use('/app', express.static('public'));


server.listen(3000, () => {
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});