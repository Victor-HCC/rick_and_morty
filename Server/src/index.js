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