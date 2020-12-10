import React, { useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { Ripple } from 'react-preloaders'
import 'antd/dist/antd.css'
import './App.css'
import CalculatorsPageContainer from './components/personalCalculators/CalculatorsPage/CalculatorsPageContainer'
import FeedbackPageContainer from './components/FeedbackPage/FeedbackPageContainer'
import FoodCategoryPage from './components/foodCalories/FoodCategoryPage/FoodCategoryPage'
import FoodCategoriesPage from './components/foodCalories/FoodCategoriesPage/FoodCategoriesPage'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginContainer from './components/auth/Login/LoginContainer'
import MainPage from './components/MainPage/MainPage'
import {onAuthStateChange} from './../src/queries/auth'
import ProfileContainer from './components/Profile/ProfileContainer'
import RecipeConstructorContainer from './components/recipeConstructor/RecipeConstructor/RecipeConstructorContainer'
import RegistrationContainer from './components/auth/Registration/RegistrationContainer'
import SavedRecipeContainer from './components/Profile/SavedRecipe/SavedRecipeContainer'
import {setUserData} from './redux/authReducer'
import {setAllUserInfo} from './redux/userPersonalData'

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
          <Route exact path='/' render={() => <MainPage />} />
          <Route path='/createAccount' render={() => <RegistrationContainer />} />
          <Route path='/login' render={() => <LoginContainer />}/>
          <Route path='/profile' render={() => <ProfileContainer/>} />
          <Route path='/savedRecipe/:category' render={() => <SavedRecipeContainer/>} />
          <Route path='/feedbackForm' render={() => <FeedbackPageContainer/>}/>
          <Route path='/foodCategoriesList' render={() => <FoodCategoriesPage />} />
          <Route path='/foodGroup/:category' render={() => <FoodCategoryPage/>} />
          <Route path='/recipeConstructor' render={() => <RecipeConstructorContainer />} />
          <Route path='/personalCalculators' render={() => <CalculatorsPageContainer />} />
          <Ripple/>
        </main>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  onAuthStateChange,
})

export default connect(mapStateToProps, {setUserData, setAllUserInfo})(App)