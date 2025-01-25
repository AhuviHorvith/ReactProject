import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react';
const LazyAppBar = React.lazy(()=>import('./Components/AppBar'))
const LazyHome = React.lazy(()=>import('./Components/Home'))
const LazyRecipeList = React.lazy(()=>import('./Components/RecipeList'))
const LazyRecipe = React.lazy(()=>import('./Components/RecipeDetails'))
const Lazyfavorite = React.lazy(()=>import('./Components/Favorites'))
const LazyLogin = React.lazy(()=>import('./Components/Login'))
const LazyAddRecipe = React.lazy(()=>import('./Components/AddRecipe'))



function App() {
  return (
    <div className="App">
      <LazyAppBar/>    
      

        <Routes>
        <Route path='/Home' element={<Suspense fallback={'loading...'}><LazyHome /> </Suspense>} />
        <Route path='/RecipeList' element={<Suspense fallback={'loading...'}><LazyRecipeList /> </Suspense>} />
        <Route path='/RecipeList/:id' element={<Suspense fallback={'loading...'}><LazyRecipe /> </Suspense>} />
        <Route path='/Favorites' element={<Suspense fallback={'loading...'}><Lazyfavorite /> </Suspense>} />
        <Route path='/Login' element={<Suspense fallback={'loading...'}><LazyLogin /> </Suspense>} />
        <Route path='/addRecipe' element={<Suspense fallback={'loading...'}><LazyAddRecipe /> </Suspense>} />
        <Route path='/' element={<Suspense fallback={'loading...'}><LazyHome /> </Suspense>} />




        </Routes> 
    </div>
  );
}

export default App;
