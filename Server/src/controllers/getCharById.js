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