import React, { useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { Ripple } from 'react-preloaders'
import 'antd/dist/antd.css'
import './App.css'
import CalculatorsPageContainer from './Components/personalCalculators/CalculatorsPage/CalculatorsPageContainer'
import FeedbackPageContainer from './Components/FeedbackPage/FeedbackPageContainer'
import FoodCategoryPage from './Components/foodCalories/FoodCategoryPage/FoodCategoryPage'
import FoodCategoriesPage from './Components/foodCalories/FoodCategoriesPage/FoodCategoriesPage'
import HeaderContainer from './Components/Header/HeaderContainer'
import LoginContainer from './Components/auth/Login/LoginContainer'
import MainPage from './Components/MainPage/MainPage'
import {onAuthStateChange} from './../src/queries/auth'
import ProfileContainer from './Components/Profile/ProfileContainer'
import RecipeConstructorContainer from './Components/recipeConstructor/RecipeConstructor/RecipeConstructorContainer'
import RegistrationContainer from './Components/auth/Registration/RegistrationContainer'
import SavedRecipeContainer from './Components/Profile/SavedRecipe/SavedRecipeContainer'
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