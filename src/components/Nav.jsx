import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";

export default function Nav({onSearch, randomChar, logOut}) {

    return (
        <div>
            <SearchBar onSearch={onSearch} randomChar={randomChar} />
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
    )
}