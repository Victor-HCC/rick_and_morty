/*
const http = require('http');
const getCharById = require('./controllers/getCharById');
// const data = require("./utils/data.js");

const PORT = 3001;

http.createServer((req, res) => {
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

    // if(url.includes('/rickandmorty/character')) {
    //     let id = url.match(/\d+/)[0];
    //     const character = data.find(elem => elem.id === Number(id));

    //     res.writeHead(200, { "Content-type":"application/json"});
    //     res.end(JSON.stringify(character));
    // }

    if(url.includes('/rickandmorty/character')) {
        // let id = url.split('/').at(-1);
        let id = url.match(/\d+/)[0];
        getCharById(res, id)
    }



}).listen(PORT, 'localhost');
*/


const express = require('express');
const server = express();
const PORT = 3001;
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

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});