const initialState = {
  modal: {
    showModal: false,
    openFoodCategory: false,
    foodCategoryLink: null,
  },
  nutritionalValue: {
    totalCalories: 0,
    totalWeight: 0,
    // totalCarbs: 0,
    // totalFats: 0,
    // totalProteins: 0,
  },
  addedFood: [],
}

const recipeConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOW_MODAL': 
      return {...state, modal: {...state.modal, showModal: action.modalState}}
    case 'SET_OPEN_FOOD_CATEGORY':
      return {...state, modal: {...state.modal, openFoodCategory: action.openCategory}}
    case 'SET_FOOD_CATEGORY_LINK':
      return {...state, modal: {...state.modal, foodCategoryLink: action.categoryLink}}
    case 'SET_NEW_INGREDIENT':
      return {...state, addedFood: [...state.addedFood, action.ingredient]}
    case 'SET_TOTAL_CALORIES':
      return {...state, nutritionalValue: {...state.nutritionalValue, totalCalories: action.calories}}
    case 'SET_TOTAL_WEIGHT':
      return {...state, nutritionalValue: {...state.nutritionalValue, totalWeight: action.weight}}
    // case 'SET_TOTAL_PROTEINS':
    //   return {...state, nutritionalValue: {...state.nutritionalValue, totalProteins: action.proteins}}
    // case 'SET_TOTAL_FATS':
    //   return {...state, nutritionalValue: {...state.nutritionalValue, totalFats: action.fats}}
    // case 'SET_TOTAL_CARBS':
    //   return {...state, nutritionalValue: {...state.nutritionalValue, totalCarbs: action.carbs}}
    case 'CHANGE_INGREDIENT': 
      const newAddedFood = state.addedFood.map(ingredient => {
        if (ingredient.title === action.ingredient.title) {
            return {...ingredient, weight: action.ingredient.weight, portionCalories: action.ingredient.portionCalories}
          } else {
            return ingredient
          }
        })
        return {...state, addedFood: newAddedFood}
    case 'REMOVE_INGREDIENT':
      return {...state, addedFood: state.addedFood.filter(ingredient => ingredient.title !== action.title)}
    case 'REMOVE_ALL_INGREDIENTS':
      return {...state, addedFood: []}
    default: return state
  }
}

export const setShowModal = (modalState) => ({type: 'SET_SHOW_MODAL', modalState})
export const setOpenFoodCategory = (openCategory) => ({type: 'SET_OPEN_FOOD_CATEGORY', openCategory})
export const setFoodCategoryLink = (categoryLink) => ({type: 'SET_FOOD_CATEGORY_LINK', categoryLink})

export const setNewIngredient = (ingredient) => ({type: 'SET_NEW_INGREDIENT', ingredient})
export const setTotalCalories = (calories) => ({type: 'SET_TOTAL_CALORIES', calories})
export const setTotalWeight = (weight) => ({type: 'SET_TOTAL_WEIGHT', weight})
// export const setTotalProteins = (proteins) => ({type: 'SET_TOTAL_PROTEINS', proteins})
// export const setTotalFats = (fats) => ({type: 'SET_TOTAL_FATS', fats})
// export const setTotalCarbs = (carbs) => ({type: 'SET_TOTAL_CARBS', carbs})

export const changeIngredient = (ingredient) => ({type: 'CHANGE_INGREDIENT', ingredient})
export const removeIngredient = (title) => ({type: 'REMOVE_INGREDIENT', title})
export const removeAllIngredients = () => ({type: 'REMOVE_ALL_INGREDIENTS'})


export const openFoodCategoryInModal = (openCategory, categoryLink) => (dispatch) => {
  dispatch(setOpenFoodCategory(openCategory))
  dispatch(setFoodCategoryLink(categoryLink))
}

export const addIngredient = (ingredient, calories, weight, proteins, fats, carbs) => (dispatch) => {
  dispatch(setNewIngredient(ingredient))
  dispatch(setShowModal(false))
  dispatch(setOpenFoodCategory(false))
  dispatch(setFoodCategoryLink(null))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
  // dispatch(setTotalProteins(proteins))
  // dispatch(setTotalFats(fats))
  // dispatch(setTotalCarbs(carbs))
}

export const editIngredient = (ingredient, calories, weight, proteins, fats, carbs) => (dispatch) => {
  dispatch(changeIngredient(ingredient))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
  // dispatch(setTotalProteins(proteins))
  // dispatch(setTotalFats(fats))
  // dispatch(setTotalCarbs(carbs))
}

export const deleteIngredient = (title, calories, weight, proteins, fats, carbs) => (dispatch) => {
  dispatch(removeIngredient(title))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
  // dispatch(setTotalProteins(proteins))
  // dispatch(setTotalFats(fats))
  // dispatch(setTotalCarbs(carbs))
}

export const clearRecipe = () => (dispatch) => {
  dispatch(removeAllIngredients())
  dispatch(setTotalCalories(0))
  dispatch(setTotalWeight(0))
  // dispatch(setTotalProteins(0))
  // dispatch(setTotalFats(0))
  // dispatch(setTotalCarbs(0))
}

export default recipeConstructorReducer