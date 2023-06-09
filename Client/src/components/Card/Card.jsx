import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import style from './Card.module.css';

function Card({name, status, species, gender, origin, image, id, onClose, addFav, removeFav, myFavorites}) {


   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({name, status, species, gender, origin, image, id, onClose, addFav, removeFav});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         <div className={style.divButtons}>
            {
               isFav ? (
                  <button className={style.button} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={`${style.button}`} onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={() => onClose(id)} className={style.button}>X</button>
         </div>
         
         <img src={image} alt='' />
         <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
         </Link>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{id}</h3>
         <h3>{gender}</h3>
         <h3>{origin.name}</h3>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))},
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);