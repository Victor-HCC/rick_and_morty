
let myFavorites = [];

function postFav(req, res) {
    const character = req.body;
    const exist = myFavorites.find(fav => fav.id === character.id);
    if(!exist) myFavorites.push(character);
    return res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
    const { id } = req.params;
    myFavorites = myFavorites.filter(elem => elem.id !== Number(id))
    return res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav };