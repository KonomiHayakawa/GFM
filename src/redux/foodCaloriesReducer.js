const initialState = {
  foodCategoryItems: [],
  selectedIngredient: {},
}

const foodCaloriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOOD_CATEGORY_ITEMS':
      return {...state, foodCategoryItems: action.data}
    case 'SET_SELECTED_INGREDIENT':
      return {...state, selectedIngredient: {ingredientData: action.ingredientData, handlerType: action.handlerType}}
    default: return state
  }
}

export const setFoodCategoryItems = (data) => ({type: 'SET_FOOD_CATEGORY_ITEMS', data})
export const setSelectedIngredient = (ingredientData, handlerType) => ({type: 'SET_SELECTED_INGREDIENT', ingredientData, handlerType})

export default foodCaloriesReducer