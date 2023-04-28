/*
const axios = require('axios');

function getCharById(res, id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         const character = {
         id: id,
         name: data.name,
         gender: data.gender,
         species: data.species,
         origin: data.origin.name,
         image: data.image,
         status: data.status
         }
      
         res.writeHead(200, { "Content-type":"application/json"});
         res.end(JSON.stringify(character));
      })
      .catch(err => {
         err.writeHead(500, { "Content-type":"text/plain"});
         err.end(`Personaje con id #${id} no encontrado`);
      })
}

module.exports = getCharById;

*/

const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

function getCharById(req, res) {
   const { id } =  req.params

   axios(`${URL}${id}`)
      .then(({ data }) => {
         if(data.name) {
            const character = {
               id: id,
               name: data.name,
               gender: data.gender,
               species: data.species,
               origin: data.origin.name,
               image: data.image,
               status: data.status
            }
         
            return res.status(200).json(character);
         }

         return res.status(404).json({error: 'Not found'});
      })
      .catch(err => err.status(500).send(err.message)) //send es para texto plano
}

module.exports = { getCharById };