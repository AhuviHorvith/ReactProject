import React from 'react';
import { useSelector } from "react-redux";
import RecipeCard from './RecipeCard'
import Grid from '@mui/material/Grid';

const Favorites = () => {
    const recipes = useSelector(x => x.RecipesSlice);
    const favoriteRecipes = recipes.filter(recipe => recipe.isFavorite);

    return (
        <>
            {favoriteRecipes.length > 0 ? (
                <Grid container justifyContent="center" marginTop={1} spacing={1}>
               { favoriteRecipes.map(recipe => (
                    <Grid item xs={12} sm={6} md={3} key={recipe.id}> 
                        <RecipeCard recipe={recipe} />
                    </Grid>
                    ))}
                </Grid>
            ) : (
                <h1 style={{ color: 'rgb(194 74 125)' }}>אין מוצרים מעודפים</h1>
            )}
        </>
    );
}

export default Favorites;
