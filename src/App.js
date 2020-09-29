import React, { useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { Ripple } from 'react-preloaders'
import './App.css';
import {onAuthStateChange} from './../src/queries/auth'
import {setUserData} from './redux/authReducer'
import {setAllUserInfo} from './redux/userPersonalData'
import HeaderContainer from './Components/Header/HeaderContainer';
import Menu from './Components/Menu/Menu';
import FoodCategoriesListContainer from './Components/foodCalories/FoodCategoriesList/FoodCategoriesListContainer';
import CalculatorsPageContainer from './Components/personalCalculators/CalculatorsPage/CalculatorsPageContainer';
import RecipeConstructorContainer from './Components/recipeConstructor/RecipeConstructor/RecipeConstructorContainer';
import LoginContainer from './Components/auth/Login/LoginContainer'
import ProfileContainer from './Components/Profile/ProfileContainer';
import FoodCategoryContainer from './Components/foodCalories/FoodCategory/FoodCategoryContainer';
import RegistrationContainer from './Components/auth/Registration/RegistrationContainer';
import SavedRecipeContainer from './Components/Profile/SavedRecipe/SavedRecipeContainer';
import FeedbackPageContainer from './Components/FeedbackPage/FeedbackPageContainer';


const App = (props) => {

  useEffect(() => {
    props.onAuthStateChange((user) => {
      if (user) {
        props.setUserData(true, user.uid, user.email)
        props.setAllUserInfo(user.uid)
      } else {
        props.setUserData(false, null, null);
      }
    })
  }, [props])
 
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <header>
          <HeaderContainer />
        </header>
        <main className='mainArea'>
          <Route path='/menu' render={() => <Menu />} />
          <Route path='/createAccount' render={() => <RegistrationContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
          <Route path='/foodCategoriesList' render={() => <FoodCategoriesListContainer />} />
          <Route path='/foodGroup/:category' render={() => <FoodCategoryContainer/>} />
          <Route path='/personalCalculators' render={() => <CalculatorsPageContainer />} />
          <Route path='/recipeConstructor' render={() => <RecipeConstructorContainer />} />
          <Route path='/profile' render={() => <ProfileContainer/>} />
          <Route path='/savedRecipe/:category' render={() => <SavedRecipeContainer/>} />
          <Route path='/feedbackForm' render={() => <FeedbackPageContainer/>} />
          <Ripple/>
        </main>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return ({
    onAuthStateChange,
  })
}

export default connect(mapStateToProps, {setUserData, setAllUserInfo})(App);
