import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id){
        setFavoriteMealIds((prevState) => {
            return [...prevState, id]
        })
    }

    function removeFavorite(id){
        setFavoriteMealIds((prevState) => {
            return prevState.filter(item => item !== id)
        })
    }

    const value ={
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;