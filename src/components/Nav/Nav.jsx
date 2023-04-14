import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import style from './Nav.module.css';

export default function Nav({onSearch, randomChar, logOut}) {

    return (
        <div className={style.nav}>
            <div>
                <SearchBar onSearch={onSearch} randomChar={randomChar} />
            </div>

            <div>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/home">
                    <button>Home</button>
                </Link>
                <Link to="/favorites">
                    <button>Favorites</button>
                </Link>
                <Link to="/">
                    <button onClick={logOut}>Log out</button>
                </Link>
            </div>
            
        </div>
    )
}