import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import MenuContainer from './Components/Menu/MenuContainer';
import ProductsCalories from './Components/ProductsCalories/ProductsCalories';
import DailyCalories from './Components/DailyCalories/DailyCalories';
import RecipeConstructor from './Components/RecipeConstructor/RecipeConstructor';

function App() {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <header>
          <Header />
        </header>
        <main className='mainArea'>
          <Route path='/menu' render={() => <MenuContainer />} />
          <Route path='/productsCalories' render={() => <ProductsCalories />} />
          <Route path='/dailyCalories' render={() => <DailyCalories />} />
          <Route path='/recipeConstructor' render={() => <RecipeConstructor />} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
