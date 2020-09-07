//recipe constructor calculations

export const calcPortionCalories = (ingredientCalories, weight) => {
  return (ingredientCalories * weight) / 100
}

export const calculateIngredientCalories = (ingredient, weight, stateTotalCalories, stateTotalWeight) => {
  const portionCalories = calcPortionCalories(ingredient.calories, weight)
  const totalCalories = stateTotalCalories + portionCalories
  const totalWeight = stateTotalWeight + weight
  return [{...ingredient, weight, portionCalories}, totalCalories, totalWeight]
}

export const calcEditedIngredient = (ingredient, newWeight, stateTotalCalories, stateTotalWeight) => {
  const portionCalories = calcPortionCalories(ingredient.calories, newWeight)
  const totalCalories = (stateTotalCalories - ingredient.portionCalories) + portionCalories
  const totalWeight = (stateTotalWeight - ingredient.weight) + newWeight
  return [{...ingredient, portionCalories, weight: newWeight}, totalCalories, totalWeight]
} 

export const calcWithoutRemovedIngredient = (ingredient, stateTotalCalories, stateTotalWeight) => {
  const totalCalories = stateTotalCalories - ingredient.portionCalories
  const totalWeight = stateTotalWeight - ingredient.weight
  return [totalCalories, totalWeight]
}

// personal calculators

export const calcDailyCalories = (form) => {
  return form.gender === 'male' 
    ? (88.36 + (13.4 * form.weight) + (4.8 * form.height) - (5.7 * form.age)) * form.activityLevel
    : (447.6 + (9.2 * form.weight) + (3.1 * form.height) - (4.3 * form.age)) * form.activityLevel
}

export const calcDailyWater = (form) => {
  const milliliters = form.gender === 'male' 
    ? form.weight * 35
    : form.weight * 31
  return (milliliters / 1000).toFixed(1)
}

export const calcBodyMassIndex = (form) => {
  const heightInCms = form.height / 100
  return form.weight / (heightInCms * heightInCms)
}