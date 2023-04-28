import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

/*
const EMAIL = 'correo@correo.com';
const PASSWORD = 'asd123';
*/

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   /*
   function onSearch(id) {
      const KEY = '64c3c1e0e1dc.874898b216a91a5c1d96';
      // axios(`https://rickandmortyapi.com/api/character/${id}?key=${KEY}`)
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            if (data.name && !characters.find(char => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡Personaje ya incluido!');
            }
         })
         .catch((error) => {
            if (error.response && error.response.status === 404) {
              window.alert('¡No hay personajes con este ID!');
            } else {
              console.error(error);
            }
         });
   }
   */

   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         
         if (data.name && !characters.find(char => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡Personaje ya incluido!');
         }

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   function randomChar() {
      const id = Math.floor(Math.random() * 826) + 1;
      const KEY = '64c3c1e0e1dc.874898b216a91a5c1d96';
      axios(`https://rickandmortyapi.com/api/character/${id}?key=${KEY}`)
         .then(({ data }) => {
            if (data.name && !characters.find(char => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else if(characters.length < 826) {
               randomChar();
            } else {
               window.alert('¡No hay más personajes por ahora!');
            }
         });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   }

   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   /*
   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   */

   /*
   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      axios(URL + `?email=${email}&password=${password}`)
         .then(({ data }) => {
            const { access } = data;
            setAccess(access);
            access && navigate('/home');
      });
   }
   */
  
  
  const login = async (userData) => {
     try {
         const URL = 'http://localhost:3001/rickandmorty/login';
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
      
   }

   const logOut = () => {
      setAccess(false);
      navigate('/');
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>

         <div>
            {location.pathname !== '/' ? <Nav onSearch={onSearch} randomChar={randomChar} logOut={logOut} /> : null}
         </div>
         
         <Routes>
            <Route path='/' element={<Form login={login} />}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='/favorites' element={<Favorites />}></Route>
            <Route path='*' element={<Error />} />

         </Routes>
         
         
      </div>
   );
}

export default App;
