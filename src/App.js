import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import MenuContainer from './Components/Menu/MenuContainer';
import ProductsCalories from './Components/ProductsCalories/ProductsCalories';
import PersonalCalculatorsConstructor from './Components/PersonalCalculators/PersonalCalculatorsConstructor';
import RecipeConstructor from './Components/RecipeConstructor/RecipeConstructor';
import LoginPageContainer from './Components/LoginPage/LoginPageContainer'
import ProfileContainer from './Components/Profile/ProfileContainer';
import { connect } from 'react-redux';
import {onAuthStateChange} from './../src/queries/queries'
import {setUserData} from './../src/redux/authReducer'


class App extends React.Component {

  componentDidMount() {
    this.props.onAuthStateChange((user) => {
      if (user) {
        this.props.setUserData(true, user.uid, user.email)
        console.log(user)
      } else {
        this.props.setUserData(false, null, null);
        console.log('nobody')
      }
    })
  }

  render() {
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
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    onAuthStateChange,

  })
}

export default connect(mapStateToProps, {setUserData})(App);
