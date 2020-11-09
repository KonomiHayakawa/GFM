//recipe constructor calculations

export const calcPortionParameter = (ingredientCalories, weight) => {
  return Math.round((ingredientCalories * weight) / 100)
}

export const calculateIngredientCalories = (ingredient, weight, nutritionalValue) => {
  const portionCalories = calcPortionParameter(ingredient.calories, weight)

  const totalCalories = nutritionalValue.totalCalories + portionCalories
  const totalWeight = nutritionalValue.totalWeight + weight

  return [
    {...ingredient, weight, portionCalories,},
    totalCalories, totalWeight, 
  ]
}

export const calcEditedIngredient = (ingredient, newWeight, nutritionalValue) => {
  const portionCalories = calcPortionParameter(ingredient.calories, newWeight)
  const totalCalories = (nutritionalValue.totalCalories - ingredient.portionCalories) + portionCalories
  const totalWeight = (nutritionalValue.totalWeight - ingredient.weight) + newWeight
  return [
    {...ingredient, portionCalories, weight: newWeight},
    totalCalories, totalWeight,
  ]
} 

export const calcWithoutRemovedIngredient = (ingredient, nutritionalValue) => {
  const totalCalories = nutritionalValue.totalCalories - ingredient.portionCalories
  const totalWeight = nutritionalValue.totalWeight - ingredient.weight
  return [totalCalories, totalWeight]
}

// personal calculators

export const calcDailyCalories = (form) => {
  return form.sex === 'male' 
    ? (88.36 + (13.4 * form.weight) + (4.8 * form.height) - (5.7 * form.age)) * form.activityType
    : (447.6 + (9.2 * form.weight) + (3.1 * form.height) - (4.3 * form.age)) * form.activityType
}

export const calcDailyWater = (form) => {
  const milliliters = form.sex === 'male' 
    ? form.weight * 35
    : form.weight * 31
  return (milliliters / 1000).toFixed(1)
}

export const calcBodyMassIndex = (form) => {
  const heightInCms = form.height / 100
  return (form.weight / (heightInCms * heightInCms)).toFixed(1)
}

