import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

function Favorites() {

    const favorites = useSelector(state => state.myFavorites)

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();
    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option>--Ordenar--</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option>--Filtrar--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="all">All favorites</option>
            </select>
            {favorites?.map(({name, status, species, gender, origin, image, id}) => {
                return (
                    <Card 
                        key={id}
                        name = {name}
                        status = {status}
                        species = {species}
                        gender = {gender}
                        origin = {origin}
                        image = {image}
                        id = {id}
                    />
                )
            })}
        </div>
    );

}

export default Favorites;