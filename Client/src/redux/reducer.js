import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, myFavorites: [...state.allCharacters, action.payload], allCharacters: [...state.allCharacters, action.payload]};
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter(elem => elem.id !== action.payload)};
        case FILTER:
            return {
                ...state,
                myFavorites: action.payload === 'all' ? [...state.allCharacters] : state.allCharacters.filter(char => char.gender === action.payload)
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharacters];
            return {
                ...state,
                myFavorites: action.payload === 'A' ? allCharactersCopy.sort((a, b) => a.id -b.id) : allCharactersCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state};
    }
};

export default rootReducer;