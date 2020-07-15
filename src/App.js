import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import MenuContainer from './Components/Menu/MenuContainer';
import ProductsCalories from './Components/ProductsCalories/ProductsCalories';
import PersonalCalculators from './Components/PersonalCalculators/PersonalCalculators';
import RecipeConstructor from './Components/RecipeConstructor/RecipeConstructor';
import LoginPageContainer from './Components/LoginPage/LoginPageContainer'
import firebase from './firebase'

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
          <Route path='/personalCalculators' render={() => <PersonalCalculators />} />
          <Route path='/recipeConstructor' render={() => <RecipeConstructor />} />
          <Route path='/login' render={() => <LoginPageContainer />} />
          <Route path='/createAccount' render={() => <LoginPageContainer />} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
