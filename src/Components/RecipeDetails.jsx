import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import {  useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import { useFavorite } from "../Hooks/useFavorite";
const RecipeDetails = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { id } = useParams()
    const recipes = useSelector(x => x.RecipesSlice)
    const recipe = recipes.find(recipe => recipe.id === parseInt(id))
    const { favorites, toggleFavorite } = useFavorite(); 
    return (
        <>
          

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{width:'40%', marginRight: '5%' ,marginLeft:'10%'}}>
                <h1>{recipe.name}</h1>
                    <h2><strong>:מצרכים</strong></h2>
                    <ul style={{ listStyleType: 'disc', paddingRight: '20px', direction: 'rtl', textAlign: 'right' }}>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>


                    <p><strong>זמן הכנה:</strong> {recipe.preparationTime}</p>
                    <p><strong>קטגוריה:</strong> {recipe.category}</p>
                    <h2>אופן ההכנה</h2>
                    <p>{recipe.prepare}</p>
                    <h3>{recipe.isFavorite ? 'מועדף' : 'לא מועדף'}</h3>
                    <Checkbox
                        icon={<FavoriteBorder style={{ color: recipe.isFavorite ? 'red' : 'black' }} />}
                        checkedIcon={<Favorite style={{ color: 'red' }} />}
                        checked={recipe.isFavorite}
                        onChange={() => toggleFavorite(recipe.id)}
                    />
                </div>
                <img src={recipe.img} alt={recipe.name} style={{ width: '40%', height: 'auto' }} />
            </div>
        </>
    )
}
export default RecipeDetails