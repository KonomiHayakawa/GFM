import img1 from './../img/menuItemImg1.png'
import img2 from './../img/menuItemImg2.png'
import img3 from './../img/menuItemImg3.png'


const initialState = {
  menuItems: [
    {id: 1, imgSrc: img1, linkTitle: 'Калорийность продуктов', menuItemLink: '/productsCalories'},
    {id: 2, imgSrc: img2, linkTitle: 'Просчитать калорийность рецепта', menuItemLink: '/recipeConstructor'},
    {id: 3, imgSrc: img3, linkTitle: 'Индивидуальны рассчёт всего :)', menuItemLink: '/personalCalculators'},

  ]
}

const menuReducer = (state = initialState, action) => {
  return state
}

export default menuReducer