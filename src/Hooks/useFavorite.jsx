
import { useDispatch } from "react-redux";
import { toggle_favorite } from '../Store/RecipesSlice'; // ודא שהנתיב נכון

export const useFavorite = () => {
    const dispatch = useDispatch();

    function toggleFavorite(id) {
        dispatch(toggle_favorite(id));
    }

    return { toggleFavorite };
};

export default useFavorite;
