import React, { useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import MenuContainer from './Components/Menu/MenuContainer';
import ProductsCalories from './Components/ProductsCalories/ProductsCalories';
import PersonalCalculatorsConstructor from './Components/PersonalCalculators/PersonalCalculatorsConstructor';
import RecipeConstructor from './Components/RecipeConstructor/RecipeConstructor';
import LoginPageContainer from './Components/LoginPage/LoginPageContainer'
import ProfileContainer from './Components/Profile/ProfileContainer';
// import firebase from './firebase'
// import { isAuth } from './queries/queries';

function App() {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <header>
          <HeaderContainer />
        </header>
        <main className='mainArea'>
          <Route path='/menu' render={() => <MenuContainer />} />
          <Route path='/productsCalories' render={() => <ProductsCalories />} />
          <Route path='/personalCalculators' render={() => <PersonalCalculatorsConstructor />} />
          <Route path='/recipeConstructor' render={() => <RecipeConstructor />} />
          <Route path='/profile' render={() => <ProfileContainer />} />
          <Route path='/login' render={() => <LoginPageContainer />} />
          <Route path='/createAccount' render={() => <LoginPageContainer />} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
