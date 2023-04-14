import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

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
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
         </Link>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{id}</h3>
         <h3>{gender}</h3>
         <h3>{origin.name}</h3>
         <img src={image} alt='' />
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