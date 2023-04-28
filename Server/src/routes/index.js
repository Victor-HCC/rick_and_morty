const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');

const router = require('express').Router();

router.get('/character/:id', (req, res) => getCharById(req, res));
router.get('/login', login); //req y res se pasan de forma automaticamente
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = { router };

