// recipeConstructor 
export const addIngredientLocalStorage = (ingredient, totalCalories, totalWeight) => {
  const addedIngredients = JSON.parse(localStorage.getItem('addedIngredients')) || []
  addedIngredients.push(ingredient)
  localStorage.setItem('addedIngredients', JSON.stringify(addedIngredients))
  localStorage.setItem('recipeTotalCalories', totalCalories)
  localStorage.setItem('recipeTotalWeight', totalWeight)
}

export const removeIngredientLocalStorage = (ingredientId, newTotalCalories, newTotalWeight) => {
  const ingredientsArr = JSON.parse(localStorage.getItem('addedIngredients'))
  const newIngredientsArr = ingredientsArr.filter(ingredient => ingredient.id !== ingredientId)
  localStorage.setItem('addedIngredients', JSON.stringify(newIngredientsArr))
  localStorage.setItem('recipeTotalCalories', newTotalCalories)
  localStorage.setItem('recipeTotalWeight', newTotalWeight)
}

export const editIngredientLocalStorage = (editedIngredient, newTotalCalories, newTotalWeight) => {
  const ingredientsArr = JSON.parse(localStorage.getItem('addedIngredients'))
  const newIngredientsArr = ingredientsArr.map(ingredient => {
    if(ingredient.id === editedIngredient.id) {
      return editedIngredient
    } else {
      return ingredient
    }
  })
  localStorage.setItem('addedIngredients', JSON.stringify(newIngredientsArr))
  localStorage.setItem('recipeTotalCalories', newTotalCalories)
  localStorage.setItem('recipeTotalWeight', newTotalWeight)
}

