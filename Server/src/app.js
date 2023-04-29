
const express = require('express');
const server = express();
const { router } = require('./routes/index');

// Middleware para agregar "/rickandmorty" antes de cada ruta
function addRickAndMorty(req, res, next) {
    req.baseUrl = "/rickandmorty" + req.baseUrl;
    next();
}

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 
server.use(express.json());

// server.use(addRickAndMorty);

server.use('/rickandmorty', router); //agrega /rickandmorty antes de cada ruta y llama a router

// server.use('/', router);

module.exports = server;
