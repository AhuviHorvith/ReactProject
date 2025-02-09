// // //  import '../Css/Home.css'; 

// // // const Home = () => {
// // //     return (
// // //       
// // //     );
// // // }
// // // export default Home;

import * as React from 'react';
import { Autocomplete, TextField, Typography, Container } from '@mui/material';
import { useSelector } from "react-redux";
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../Css/Home.css'

const Home = () => {
    const recipes = useSelector(state => state.RecipesSlice); 
    const [searchTerm, setSearchTerm] = useState('');

    // סינון המתכונים על פי מונח החיפוש
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const recipeNames = filteredRecipes.map(recipe => recipe.name);

    return (
        <div className="full-screen-image">
            <Container className="home-container" maxWidth="sm">
              <div className="image-center">
              </div>
              <div className='input'>
                <Autocomplete
                    freeSolo
                    options={recipeNames}
                    onInputChange={(event, newInputValue) => {
                        setSearchTerm(newInputValue);
                    }}
                    renderInput={(params) => (
                        <TextField 
                       
                            {...params} 
                            fullWidth 
                            variant="outlined" 
                            placeholder="חפשו מתכון"
                            margin="normal"
                        />
                    )}
                    renderOption={(props, option) => {
                        const selectedRecipe = recipes.find(recipe => recipe.name === option);
                        return selectedRecipe ? (
                            <Link to={`/RecipeList/${selectedRecipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <li {...props}>{option}</li>
                            </Link>
                        ) : null;
                    }}
                />
                </div>
            </Container>
        </div>
    );
}

export default Home;
