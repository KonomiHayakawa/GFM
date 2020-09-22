//recipe constructor calculations

export const calcPortionParameter = (ingredientCalories, weight) => {
  return (ingredientCalories * weight) / 100
}

export const calculateIngredientCalories = (ingredient, weight, nutritionalValue) => {

  const portionCalories = calcPortionParameter(ingredient.calories, weight)
  // const portionCarbs = calcPortionParameter(ingredient.carbohydrates, weight)
  // const portionFats = calcPortionParameter(ingredient.fats, weight)
  // const portionProteins = calcPortionParameter(ingredient.proteins, weight)

  const totalCalories = nutritionalValue.totalCalories + portionCalories
  const totalWeight = nutritionalValue.totalWeight + weight
  // const totalCarbs = nutritionalValue.totalCarbs + portionCarbs
  // const totalFats = nutritionalValue.totalFats + portionFats
  // const totalProteins = nutritionalValue.totalProteins + portionProteins

  return [
    {...ingredient, weight, portionCalories,}, //portionProteins, portionFats, portionCarbs},
    totalCalories, totalWeight, 
    // totalProteins, totalFats, totalCarbs
  ]
}

export const calcEditedIngredient = (ingredient, newWeight, nutritionalValue) => {

  const portionCalories = calcPortionParameter(ingredient.calories, newWeight)
  // const portionCarbs = calcPortionParameter(ingredient.carbohydrates, newWeight)
  // const portionFats = calcPortionParameter(ingredient.fats, newWeight)
  // const portionProteins = calcPortionParameter(ingredient.proteins, newWeight)

  const totalCalories = (nutritionalValue.totalCalories - ingredient.portionCalories) + portionCalories
  const totalWeight = (nutritionalValue.totalWeight - ingredient.weight) + newWeight
  // const totalProteins = (nutritionalValue.totalProteins - ingredient.portionProteins) + portionProteins
  // const totalFats = (nutritionalValue.totalFats - ingredient.portionFats) + portionFats
  // const totalCarbs = (nutritionalValue.totalCarbs - ingredient.portionCarbs) + portionCarbs
 
  return [
    {...ingredient, portionCalories, weight: newWeight}, //portionProteins, portionFats, portionCarbs},
    totalCalories, totalWeight,
    // totalProteins, totalFats, totalCarbs
  ]
} 

export const calcWithoutRemovedIngredient = (ingredient, nutritionalValue) => {
  const totalCalories = nutritionalValue.totalCalories - ingredient.portionCalories
  const totalWeight = nutritionalValue.totalWeight - ingredient.weight
  // const totalProteins = nutritionalValue.totalProteins - ingredient.portionProteins
  // const totalFats = nutritionalValue.totalFats - ingredient.portionFats
  // const totalCarbs = nutritionalValue.totalCarbs - ingredient.portionCarbs
  return [totalCalories, totalWeight, 
    // totalProteins, totalFats, totalCarbs
  ]
}

// personal calculators

export const calcDailyCalories = (form) => {
  return form.sex === 'male' 
    ? (88.36 + (13.4 * form.weight) + (4.8 * form.height) - (5.7 * form.age)) * form.activityLevel
    : (447.6 + (9.2 * form.weight) + (3.1 * form.height) - (4.3 * form.age)) * form.activityLevel
}

export const calcDailyWater = (form) => {
  const milliliters = form.sex === 'male' 
    ? form.weight * 35
    : form.weight * 31
  return (milliliters / 1000).toFixed(1)
}

export const calcBodyMassIndex = (form) => {
  const heightInCms = form.height / 100
  return form.weight / (heightInCms * heightInCms)
}

