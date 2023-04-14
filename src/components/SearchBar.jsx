import { useState } from "react";

export default function SearchBar({onSearch, randomChar}) {

   const [id, setId] = useState('');

   const handleChange = (e) => {
      const value = e.target.value;

      setId(value);
   }
   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={() => onSearch(id)}>Agregar</button>
         <button onClick={() => randomChar()}>Agregar Random</button>
      </div>
   );
}
