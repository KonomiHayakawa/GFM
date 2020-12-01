const initialState = {
  ingredientsArea: {
    showIngredientsArea: false,
    openFoodCategory: false,
    foodCategoryLink: null,
  },
  nutritionalValue: {
    totalCalories: 0,
    totalWeight: 0,
  },
  addedFood: [],
}

const recipeConstructorReducer = (state = initialState, action) => {
  switch (action.type) {

  // ingredientsArea
  case 'SET_SHOW_INGREDIENTS_AREA': 
    return {...state, ingredientsArea: {...state.ingredientsArea, showIngredientsArea: action.isIngredientsAreaOpen}}
  case 'SET_OPEN_FOOD_CATEGORY':
    return {...state, ingredientsArea: {...state.ingredientsArea, openFoodCategory: action.openCategory}}
  case 'SET_FOOD_CATEGORY_LINK':
    return {...state, ingredientsArea: {...state.ingredientsArea, foodCategoryLink: action.categoryLink}}

  // ingredients
    case 'SET_NEW_INGREDIENT':
      return {...state, addedFood: [...state.addedFood, action.ingredient]}
    case 'SET_ALL_INGREDIENTS':
      return {...state, addedFood: [action.ingredients]}
    case 'SET_TOTAL_CALORIES':
      return {...state, nutritionalValue: {...state.nutritionalValue, totalCalories: action.calories}}
    case 'SET_TOTAL_WEIGHT':
      return {...state, nutritionalValue: {...state.nutritionalValue, totalWeight: action.weight}}
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
      return {...state, addedFood: state.addedFood.filter(ingredient => ingredient.id !== action.id)}
    case 'REMOVE_ALL_INGREDIENTS':
      return {...state, addedFood: []}
    default: return state
  }
}

// ingredientsArea
export const setShowIngredientsArea = (isIngredientsAreaOpen) => ({type: 'SET_SHOW_INGREDIENTS_AREA', isIngredientsAreaOpen})
export const setOpenFoodCategory = (openCategory) => ({type: 'SET_OPEN_FOOD_CATEGORY', openCategory})
export const setFoodCategoryLink = (categoryLink) => ({type: 'SET_FOOD_CATEGORY_LINK', categoryLink})

// ingredients
export const setNewIngredient = (ingredient) => ({type: 'SET_NEW_INGREDIENT', ingredient})
export const setAllIngredients = (ingredients) => ({type: 'SET_ALL_INGREDIENTS', ingredients})
export const setTotalCalories = (calories) => ({type: 'SET_TOTAL_CALORIES', calories})
export const setTotalWeight = (weight) => ({type: 'SET_TOTAL_WEIGHT', weight})
export const changeIngredient = (ingredient) => ({type: 'CHANGE_INGREDIENT', ingredient})
export const removeIngredient = (id) => ({type: 'REMOVE_INGREDIENT', id})
export const removeAllIngredients = () => ({type: 'REMOVE_ALL_INGREDIENTS'})

export const openFoodCategoryInIngredientsArea = (openCategory, categoryLink) => (dispatch) => {
  dispatch(setOpenFoodCategory(openCategory))
  dispatch(setFoodCategoryLink(categoryLink))
}

export const addIngredient = (ingredient, calories, weight) => (dispatch) => {
  dispatch(setNewIngredient(ingredient))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
}

export const editIngredient = (ingredient, calories, weight) => (dispatch) => {
  dispatch(changeIngredient(ingredient))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
}

export const deleteIngredient = (id, calories, weight) => (dispatch) => {
  dispatch(removeIngredient(id))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
}

export const setRecipeData = (ingredients, calories, weight) => (dispatch) => {
  dispatch(removeAllIngredients())
  ingredients.map(ingredient => dispatch(setNewIngredient(ingredient)))
  dispatch(setTotalCalories(calories))
  dispatch(setTotalWeight(weight))
}

export const clearRecipe = () => (dispatch) => {
  dispatch(removeAllIngredients())
  dispatch(setTotalCalories(0))
  dispatch(setTotalWeight(0))
}

export const closeIngredientsArea = () => (dispatch) => {
  dispatch(setShowIngredientsArea(false))
  dispatch(setOpenFoodCategory(false))
  dispatch(setFoodCategoryLink(null))
}

export default recipeConstructorReducer