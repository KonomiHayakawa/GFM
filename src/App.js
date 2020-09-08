import React, { useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import MenuContainer from './Components/Menu/MenuContainer';
import FoodCategoriesListContainer from './Components/foodCalories/FoodCategoriesList/FoodCategoriesListContainer';
import CalculatorsPageContainer from './Components/personalCalculators/CalculatorsPage/CalculatorsPageContainer';
import RecipeConstructorContainer from './Components/RecipeConstructor/RecipeConstructorContainer';
import LoginContainer from './Components/auth/Login/LoginContainer'
import ProfileContainer from './Components/Profile/ProfileContainer';
import FoodCategoryContainer from './Components/foodCalories/FoodCategory/FoodCategoryContainer';
import { connect } from 'react-redux';
import {onAuthStateChange} from './../src/queries/queries'
import {setUserData} from './../src/redux/authReducer'
import {setAllUserInfo} from './redux/userPersonalData'
import { Ripple } from 'react-preloaders'

const App = (props) => {

  useEffect(() => {
    props.onAuthStateChange((user) => {
      if (user) {
        props.setUserData(true, user.uid, user.email)
        props.setAllUserInfo(user.uid)
        console.log(user)
      } else {
        props.setUserData(false, null, null);
        console.log('nobody')
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
          <Route path='/menu' render={() => <MenuContainer />} />
          <Route path='/foodCategoriesList' render={() => <FoodCategoriesListContainer />} />
          <Route path='/foodGroup/:category' render={() => <FoodCategoryContainer/>} />
          <Route path='/personalCalculators' render={() => <CalculatorsPageContainer />} />
          <Route path='/recipeConstructor' render={() => <RecipeConstructorContainer />} />
          <Route path='/profile' render={() => <ProfileContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
          <Route path='/createAccount' render={() => <LoginContainer />} />
          <Ripple />
        </main>
      </div>
    </BrowserRouter>
  )
}


// class App extends React.Component {

//   componentDidMount() {
//     this.props.onAuthStateChange((user) => {
//       if (user) {
//         this.props.setUserData(true, user.uid, user.email)
//         this.props.setAllUserInfo(user.uid)
//         console.log(user)
//       } else {
//         this.props.setUserData(false, null, null);
//         console.log('nobody')
//       }
//     })
//   }

//   render() {
//     return (
//       <BrowserRouter>
//         <div className='appWrapper'>
//           <header>
//             <HeaderContainer />
//           </header>
//           <main className='mainArea'>
//             <Route path='/menu' render={() => <MenuContainer />} />
//             <Route path='/foodCategoriesList' render={() => <FoodCategoriesListContainer />} />
//             <Route path='/foodGroup/:category' render={() => <FoodCategoryContainer/>} />
//             <Route path='/personalCalculators' render={() => <CalculatorsPageContainer />} />
//             <Route path='/recipeConstructor' render={() => <RecipeConstructorContainer />} />
//             <Route path='/profile' render={() => <ProfileContainer />} />
//             <Route path='/login' render={() => <LoginContainer />} />
//             <Route path='/createAccount' render={() => <LoginContainer />} />
//           </main>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return ({
    onAuthStateChange,
  })
}

export default connect(mapStateToProps, {setUserData, setAllUserInfo})(App);
