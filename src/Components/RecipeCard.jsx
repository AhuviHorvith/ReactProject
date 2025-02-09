
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { useFavorite } from "../Hooks/useFavorite";
const RecipeCard=({ recipe })=>{
  const { favorites, toggleFavorite } = useFavorite(); 
    return<>
    
    <Card key={recipe.id} sx={{ maxWidth: 345, flex: '1 0 345px' }}>
          <CardHeader
            action={
              <div>
                <Link to={`/RecipeList/${recipe.id}`} style={{ textDecoration: 'none', color: 'red' }}>
                  ↩
                </Link>
              </div>
            }
            title={recipe.name}
          />
          <Link to={`/RecipeList/${recipe.id}`} style={{ textDecoration: 'none', color: 'red' }}>
            <CardMedia
              component="img"
              height="194"
              image={recipe.img || '../images/p8.webp'}
            />
          </Link>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* <p style={{color:'red'}}>{`  ${recipe.preparationTime} ⏱️`}</p>
          <p style={{color:'red'}}>{recipe.category}</p> */}
          <p>{recipe.text}</p>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
            
              icon={<FavoriteBorder style={{ color: recipe.isFavorite ? 'red' : 'black' }} />}
              checkedIcon={<Favorite style={{ color: 'red' }} />}
              checked={recipe.isFavorite}
              onChange={() => toggleFavorite(recipe.id)}
            />
          </CardActions>
        </Card>
    
   
    </>
}
export default RecipeCard