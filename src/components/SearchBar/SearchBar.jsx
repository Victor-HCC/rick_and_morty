import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch, randomChar}) {

   const [id, setId] = useState('');

   const handleChange = (e) => {
      const value = e.target.value;

      setId(value);
   }
   return (
      <div className={style.bar}>
         <input type='search' onChange={handleChange} className={style.input} placeholder="Ingrese el ID" />
         <button onClick={() => onSearch(id)} className={style.button}>Agregar</button>
         <button onClick={() => randomChar()} className={`${style.button} ${style.buttonFin}`}>Agregar Random</button>
      </div>
   );
}
