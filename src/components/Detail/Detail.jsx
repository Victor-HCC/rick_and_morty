import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail() {

    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            {character.name ? <div>{character.name}</div> : <></>}
            <div>
                {character.status ? <div>{character.status}</div> : <></>}
                {character.species ? <div>{character.species}</div> : <></>}
                {character.gender ? <div>{character.gender}</div> : <></>}
                {character.origin?.name ? <div>{character.origin.name}</div> : <></>}
                {character.image ? <img src={character.image} alt='' /> : <></>}
                
            </div>
        </div>
    );
}