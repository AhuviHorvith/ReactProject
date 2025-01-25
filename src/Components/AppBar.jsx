import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AppBar = () => {
    const User = useSelector(x => x.UserSlice);

    //const [value, setValue] = React.useState(0);
        const display = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 

          };
          const linkStyle = {
            textDecoration: 'none',
            color: 'red',
            padding: '10px',
            margin: '5px',
            display: 'inline-block',
        };
        const welcomeStyle = {
            marginRight: 'auto', 
            textAlign: 'right', 
            color:'#a3663b'
        };

        return(
    <div style={display}> 
         <h2 style={welcomeStyle}> שלום ל: {User.name||"אורח"} </h2>
            <Link to={'/Home'} style={linkStyle} >בית</Link>
            <Link to={'/login'} style={linkStyle}>הרשמה</Link>
            <Link to={'/RecipeList'} style={linkStyle}>לכל המתכונים</Link>
            <Link to={'/Favorites'} style={linkStyle}>מועדפים💗</Link>
            <Link to={'/addRecipe'} style={linkStyle}>להוספת מתכון</Link>

    </div>
    )
    // return (
    //     <Box sx={{ width: 500 }}>
    //         <BottomNavigation
    //             showLabels
    //             value={value}
    //             onChange={(event, newValue) => {
    //                 setValue(newValue);
    //             }}
    //         >
    //                  <BottomNavigationAction
    //                 component={Link}
    //                 to={'/Favorites'}
    //                 label="Favorites"
    //                 icon={<AddHome />}
    //             />
    //             <BottomNavigationAction
    //                 component={Link}
    //                 to={'/Favorites'}
    //                 label="Favorites"
    //                 icon={<FavoriteIcon />}
    //             />

    //         </BottomNavigation>
    //     </Box>
    // )
}
export default AppBar
