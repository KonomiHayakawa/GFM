const initialState = {
  modal: {
    showModal: false,
    openFoodCategory: false,
    foodCategoryLink: null,
  },
  addedFood: [],
  totalCalories: 0,
  totalWeight: 0,
}

const recipeConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOW_MODAL': 
      return {...state, modal: {...state.modal, showModal: action.modalState}};
    case 'SET_OPEN_FOOD_CATEGORY':
      return {...state, modal: {...state.modal, openFoodCategory: action.openCategory}};
    case 'SET_FOOD_CATEGORY_LINK':
      return {...state, modal: {...state.modal, foodCategoryLink: action.categoryLink}};
    case 'SET_NEW_INGREDIENT':
      return {...state, addedFood: [...state.addedFood, action.ingredient]};
    case 'SET_TOTAL_CALORIES':
      return {...state, totalCalories: action.calories};
    case 'SET_TOTAL_WEIGHT':
      return {...state, totalWeight: action.weight};
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
      return {...state, addedFood: state.addedFood.filter(ingredient => ingredient.title !== action.title)};
    default: return state
  }
}

export const setShowModal = (modalState) => ({type: 'SET_SHOW_MODAL', modalState})
export const setOpenFoodCategory = (openCategory) => ({type: 'SET_OPEN_FOOD_CATEGORY', openCategory})
export const setFoodCategoryLink = (categoryLink) => ({type: 'SET_FOOD_CATEGORY_LINK', categoryLink})

export const setNewIngredient = (ingredient) => ({type: 'SET_NEW_INGREDIENT', ingredient})
export const setTotalCalories = (calories) => ({type: 'SET_TOTAL_CALORIES', calories})
export const setTotalWeight = (weight) => ({type: 'SET_TOTAL_WEIGHT', weight})

export const changeIngredient = (ingredient) => ({type: 'CHANGE_INGREDIENT', ingredient})
export const removeIngredient = (title) => ({type: 'REMOVE_INGREDIENT', title})




export const openFoodCategoryInModal = (openCategory, categoryLink) => (dispatch) => {
  dispatch(setOpenFoodCategory(openCategory))
  dispatch(setFoodCategoryLink(categoryLink))
}

export const addIngredient = (ingredient, calories, weight) => (dispatch) => {
  dispatch(setNewIngredient(ingredient))
  dispatch(setShowModal(false))
  dispatch(setOpenFoodCategory(false))
  dispatch(setFoodCategoryLink(null))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
}

export const editIngredient = (ingredient, calories, weight) => (dispatch) => {
  dispatch(changeIngredient(ingredient))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
}

export const deleteIngredient = (title, calories, weight) => (dispatch) => {
  dispatch(removeIngredient(title))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
}

export default recipeConstructorReducer