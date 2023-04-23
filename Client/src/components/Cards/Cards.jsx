import Card from '../Card/Card';
import { CardsContainer } from './styledComponents';
/**Lo primero que debes hacer es recibir la propiedad characters mediante las props. Esta propiedad es una arreglo con todos tus personajes. Por cada uno de ellos deberás renderizar un componente Card pasándole todas las propiedades que ya mencionamos en el ejercicio anterior.

[NOTA]: agrega una propiedad llamada key y que sea igual al ID del personaje. */
export default function Cards({characters, onClose}) {
   return (
   <CardsContainer>
      {characters.map(({name, status, species, gender, origin, image, id}) => {
         return (<Card 
            key={id}
            name = {name}
            status = {status}
            species = {species}
            gender = {gender}
            origin = {origin}
            image = {image}
            id = {id}
            onClose = {onClose}
            />
         );
      })}
   </CardsContainer>
   );
}
