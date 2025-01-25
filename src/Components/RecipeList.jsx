import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from "react-redux"
import RecipeCard from './RecipeCard'
const RecipeReviewCard=() =>{
  const recipes = useSelector(x => x.RecipesSlice)

  return (
    <Grid container justifyContent="center"  spacing={1}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={3} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}
export default RecipeReviewCard
