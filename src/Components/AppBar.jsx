import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const CustomAppBar = () => {
    const User = useSelector(x => x.UserSlice);
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour >6&&hour<12) {
            return "Good morning: ";
        } else if (hour > 12&&hour<18) {
            return " Good afternoon: ";
        } else if(hour>18&&hour<22){
            return "Good evening: ";
        }
        else{
            return"Good night: "
        }
    };
    return (
        <AppBar position="static" style={{ backgroundColor: '#D2B48C' }}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" style={{ color: 'white', textAlign: 'right' }}>
                            {getGreeting()}: {User.firstName || "New user"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container justifyContent="flex-end">
                            <Button component={Link} to={'/Home'} color="inherit">Home</Button>
                            <Button component={Link} to={'/login'} color="inherit">Login</Button>
                            <Button component={Link} to={'/RecipeList'} color="inherit">Recpies</Button>
                            <Button component={Link} to={'/Favorites'} color="inherit">Favorite💗</Button>
                            <Button component={Link} to={'/addRecipe'} color="inherit"> Add Recipe</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;
