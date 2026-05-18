
/*
Destiny Fitness meal object schema
{
  id: string, title: string, category: string, goalType: string,
  calories: number, protein: number, carbs: number, fats: number, fiber: number,
  prepTime: number, cookTime: number, servings: number,
  image: string, tags: string[], ingredients: string[], instructions: string[],
  portionBreakdown: string[],
  components: { "Protein source": string, "Carb source": string, "Fat source": string, "Vegetable/fiber source": string, "Sauce/flavor source": string },
  storage: string, reheating: string, bestUsedFor: string[],
  grocery: { [groceryGroup: string]: string[] }
}
*/
window.DESTINY_MEALS = [
  {
    "id": "meal-001",
    "title": "Chicken Fajita Bowl",
    "category": "Weight Loss & Shred",
    "goalType": "Weight loss",
    "calories": 405,
    "protein": 42,
    "carbs": 36,
    "fats": 10,
    "fiber": 7,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-001.svg",
    "tags": [
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Brown Rice - portioned for the listed macros",
      "Bell Peppers And Onions - 1 to 2 cups per serving",
      "Avocado Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the brown rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the bell peppers and onions based on the recipe style.",
      "Divide the chicken breast, brown rice, and bell peppers and onions evenly into meal prep containers.",
      "Add the avocado salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: brown rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: bell peppers and onions, 1 to 2 cups",
      "Fat/Sauce: avocado salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "brown rice",
      "Fat source": "avocado salsa",
      "Vegetable/fiber source": "bell peppers and onions",
      "Sauce/flavor source": "avocado salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Brown Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Bell Peppers And Onions - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Avocado Salsa - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Avocado Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Brown Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-002",
    "title": "Turkey Taco Bowl",
    "category": "Weight Loss & Shred",
    "goalType": "Shred",
    "calories": 360,
    "protein": 39,
    "carbs": 24,
    "fats": 12,
    "fiber": 8,
    "prepTime": 20,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-002.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Shred",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Lean Ground Turkey - 4 to 6 oz cooked per serving",
      "Cauliflower Rice - portioned for the listed macros",
      "Romaine And Tomatoes - 1 to 2 cups per serving",
      "Salsa Verde - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean ground turkey until fully done and lightly seasoned.",
      "Prepare the cauliflower rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the romaine and tomatoes based on the recipe style.",
      "Divide the lean ground turkey, cauliflower rice, and romaine and tomatoes evenly into meal prep containers.",
      "Add the salsa verde in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean ground turkey, 4 to 6 oz cooked",
      "Carb: cauliflower rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: romaine and tomatoes, 1 to 2 cups",
      "Fat/Sauce: salsa verde, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean ground turkey",
      "Carb source": "cauliflower rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "romaine and tomatoes",
      "Sauce/flavor source": "salsa verde"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Shred",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Lean Ground Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Cauliflower Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Romaine And Tomatoes - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa Verde - measured lightly"
      ],
      "Pantry Staples": [
        "Cauliflower Rice - portioned for the listed macros",
        "Romaine And Tomatoes - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-003",
    "title": "Shrimp Zucchini Bowl",
    "category": "Weight Loss & Shred",
    "goalType": "Weight loss",
    "calories": 335,
    "protein": 35,
    "carbs": 31,
    "fats": 8,
    "fiber": 5,
    "prepTime": 12,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-003.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Shrimp - 4 to 6 oz cooked per serving",
      "Jasmine Rice - portioned for the listed macros",
      "Zucchini Ribbons - 1 to 2 cups per serving",
      "Lemon Garlic Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shrimp until fully done and lightly seasoned.",
      "Prepare the jasmine rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the zucchini ribbons based on the recipe style.",
      "Divide the shrimp, jasmine rice, and zucchini ribbons evenly into meal prep containers.",
      "Add the lemon garlic sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shrimp, 4 to 6 oz cooked",
      "Carb: jasmine rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: zucchini ribbons, 1 to 2 cups",
      "Fat/Sauce: lemon garlic sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shrimp",
      "Carb source": "jasmine rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "zucchini ribbons",
      "Sauce/flavor source": "lemon garlic sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Shrimp - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Jasmine Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini Ribbons - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Garlic Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Jasmine Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-004",
    "title": "Greek Chicken Salad Box",
    "category": "Weight Loss & Shred",
    "goalType": "High protein",
    "calories": 390,
    "protein": 41,
    "carbs": 32,
    "fats": 11,
    "fiber": 6,
    "prepTime": 10,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-004.svg",
    "tags": [
      "High protein",
      "Weight Loss & Shred"
    ],
    "ingredients": [
      "Grilled Chicken Breast - 4 to 6 oz cooked per serving",
      "Whole Wheat Pita - portioned for the listed macros",
      "Cucumber Tomato Salad - 1 to 2 cups per serving",
      "Tzatziki Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the grilled chicken breast until fully done and lightly seasoned.",
      "Prepare the whole wheat pita according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber tomato salad based on the recipe style.",
      "Divide the grilled chicken breast, whole wheat pita, and cucumber tomato salad evenly into meal prep containers.",
      "Add the tzatziki light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: grilled chicken breast, 4 to 6 oz cooked",
      "Carb: whole wheat pita, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber tomato salad, 1 to 2 cups",
      "Fat/Sauce: tzatziki light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "grilled chicken breast",
      "Carb source": "whole wheat pita",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber tomato salad",
      "Sauce/flavor source": "tzatziki light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Weight Loss & Shred"
    ],
    "grocery": {
      "Proteins": [
        "Grilled Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Wheat Pita - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Tomato Salad - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Tzatziki Light - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-005",
    "title": "Buffalo Chicken Lettuce Wrap Prep",
    "category": "Weight Loss & Shred",
    "goalType": "Low carb",
    "calories": 330,
    "protein": 38,
    "carbs": 22,
    "fats": 9,
    "fiber": 5,
    "prepTime": 15,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-005.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Shredded Chicken - 4 to 6 oz cooked per serving",
      "Sweet Potato Cubes - portioned for the listed macros",
      "Butter Lettuce - 1 to 2 cups per serving",
      "Buffalo Yogurt Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shredded chicken until fully done and lightly seasoned.",
      "Prepare the sweet potato cubes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the butter lettuce based on the recipe style.",
      "Divide the shredded chicken, sweet potato cubes, and butter lettuce evenly into meal prep containers.",
      "Add the buffalo yogurt sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shredded chicken, 4 to 6 oz cooked",
      "Carb: sweet potato cubes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: butter lettuce, 1 to 2 cups",
      "Fat/Sauce: buffalo yogurt sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shredded chicken",
      "Carb source": "sweet potato cubes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "butter lettuce",
      "Sauce/flavor source": "buffalo yogurt sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Shredded Chicken - 4 to 6 oz cooked per serving",
        "Buffalo Yogurt Sauce - measured lightly"
      ],
      "Carbs": [
        "Sweet Potato Cubes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Butter Lettuce - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Butter Lettuce - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Buffalo Yogurt Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-006",
    "title": "Egg White Breakfast Bowl",
    "category": "Weight Loss & Shred",
    "goalType": "Weight loss",
    "calories": 310,
    "protein": 32,
    "carbs": 34,
    "fats": 5,
    "fiber": 5,
    "prepTime": 12,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-006.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Egg Whites - 4 to 6 oz cooked per serving",
      "Roasted Potatoes - portioned for the listed macros",
      "Spinach And Peppers - 1 to 2 cups per serving",
      "Hot Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the egg whites until fully done and lightly seasoned.",
      "Prepare the roasted potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach and peppers based on the recipe style.",
      "Divide the egg whites, roasted potatoes, and spinach and peppers evenly into meal prep containers.",
      "Add the hot sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: egg whites, 4 to 6 oz cooked",
      "Carb: roasted potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach and peppers, 1 to 2 cups",
      "Fat/Sauce: hot sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "egg whites",
      "Carb source": "roasted potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach and peppers",
      "Sauce/flavor source": "hot sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Carbs": [
        "Roasted Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach And Peppers - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Hot Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Egg Whites - 4 to 6 oz cooked per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-007",
    "title": "Turkey Burger Bowl",
    "category": "Weight Loss & Shred",
    "goalType": "Shred",
    "calories": 375,
    "protein": 40,
    "carbs": 18,
    "fats": 15,
    "fiber": 6,
    "prepTime": 20,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-007.svg",
    "tags": [
      "High protein",
      "Low carb",
      "Shred",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Turkey Patty - 4 to 6 oz cooked per serving",
      "Cauliflower Rice - portioned for the listed macros",
      "Lettuce Tomato Pickles - 1 to 2 cups per serving",
      "Mustard Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey patty until fully done and lightly seasoned.",
      "Prepare the cauliflower rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the lettuce tomato pickles based on the recipe style.",
      "Divide the turkey patty, cauliflower rice, and lettuce tomato pickles evenly into meal prep containers.",
      "Add the mustard sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey patty, 4 to 6 oz cooked",
      "Carb: cauliflower rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: lettuce tomato pickles, 1 to 2 cups",
      "Fat/Sauce: mustard sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey patty",
      "Carb source": "cauliflower rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "lettuce tomato pickles",
      "Sauce/flavor source": "mustard sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Low carb",
      "Shred",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Patty - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Cauliflower Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Lettuce Tomato Pickles - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Mustard Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Cauliflower Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-008",
    "title": "Salmon Asparagus Rice Plate",
    "category": "Weight Loss & Shred",
    "goalType": "High protein",
    "calories": 455,
    "protein": 37,
    "carbs": 35,
    "fats": 18,
    "fiber": 5,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-008.svg",
    "tags": [
      "High protein",
      "Weight Loss & Shred"
    ],
    "ingredients": [
      "Salmon - 4 to 6 oz cooked per serving",
      "Jasmine Rice - portioned for the listed macros",
      "Asparagus - 1 to 2 cups per serving",
      "Lemon Dill Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the salmon until fully done and lightly seasoned.",
      "Prepare the jasmine rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the asparagus based on the recipe style.",
      "Divide the salmon, jasmine rice, and asparagus evenly into meal prep containers.",
      "Add the lemon dill sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: salmon, 4 to 6 oz cooked",
      "Carb: jasmine rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: asparagus, 1 to 2 cups",
      "Fat/Sauce: lemon dill sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "salmon",
      "Carb source": "jasmine rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "asparagus",
      "Sauce/flavor source": "lemon dill sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Weight Loss & Shred"
    ],
    "grocery": {
      "Proteins": [
        "Salmon - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Jasmine Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Asparagus - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Salmon - 4 to 6 oz cooked per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Dill Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Jasmine Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-009",
    "title": "Chicken Cucumber Feta Box",
    "category": "Weight Loss & Shred",
    "goalType": "Weight loss",
    "calories": 410,
    "protein": 42,
    "carbs": 30,
    "fats": 13,
    "fiber": 6,
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-009.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Quinoa - portioned for the listed macros",
      "Cucumber And Greens - 1 to 2 cups per serving",
      "Feta Vinaigrette - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the quinoa according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber and greens based on the recipe style.",
      "Divide the chicken breast, quinoa, and cucumber and greens evenly into meal prep containers.",
      "Add the feta vinaigrette in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: quinoa, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber and greens, 1 to 2 cups",
      "Fat/Sauce: feta vinaigrette, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "quinoa",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber and greens",
      "Sauce/flavor source": "feta vinaigrette"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Quinoa - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber And Greens - 1 to 2 cups per serving"
      ],
      "Dairy & Alternatives": [
        "Feta Vinaigrette - measured lightly"
      ],
      "Pantry Staples": [
        "Quinoa - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-010",
    "title": "Lean Beef Cauliflower Rice Bowl",
    "category": "Weight Loss & Shred",
    "goalType": "Low carb",
    "calories": 345,
    "protein": 38,
    "carbs": 14,
    "fats": 15,
    "fiber": 6,
    "prepTime": 20,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-010.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "96 Percent Lean Beef - 4 to 6 oz cooked per serving",
      "Cauliflower Rice - portioned for the listed macros",
      "Green Beans - 1 to 2 cups per serving",
      "Salsa Roja - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the 96 percent lean beef until fully done and lightly seasoned.",
      "Prepare the cauliflower rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the green beans based on the recipe style.",
      "Divide the 96 percent lean beef, cauliflower rice, and green beans evenly into meal prep containers.",
      "Add the salsa roja in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: 96 percent lean beef, 4 to 6 oz cooked",
      "Carb: cauliflower rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: green beans, 1 to 2 cups",
      "Fat/Sauce: salsa roja, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "96 percent lean beef",
      "Carb source": "cauliflower rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "green beans",
      "Sauce/flavor source": "salsa roja"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "96 Percent Lean Beef - 4 to 6 oz cooked per serving",
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Carbs": [
        "Cauliflower Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa Roja - measured lightly"
      ],
      "Pantry Staples": [
        "Cauliflower Rice - portioned for the listed macros",
        "Green Beans - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-011",
    "title": "Lemon Herb Chicken Green Bowl",
    "category": "Weight Loss & Shred",
    "goalType": "Weight loss",
    "calories": 385,
    "protein": 43,
    "carbs": 32,
    "fats": 8,
    "fiber": 7,
    "prepTime": 10,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-011.svg",
    "tags": [
      "High protein",
      "PMS / Cycle Support",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Small Potatoes - portioned for the listed macros",
      "Broccoli - 1 to 2 cups per serving",
      "Lemon Herb Dressing - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the small potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli based on the recipe style.",
      "Divide the chicken breast, small potatoes, and broccoli evenly into meal prep containers.",
      "Add the lemon herb dressing in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: small potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli, 1 to 2 cups",
      "Fat/Sauce: lemon herb dressing, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "small potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "broccoli",
      "Sauce/flavor source": "lemon herb dressing"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "PMS / Cycle Support",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Small Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Herb Dressing - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-012",
    "title": "Turkey Zucchini Marinara Bowl",
    "category": "Weight Loss & Shred",
    "goalType": "Shred",
    "calories": 320,
    "protein": 36,
    "carbs": 16,
    "fats": 11,
    "fiber": 5,
    "prepTime": 20,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-012.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Shred",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Lean Turkey - 4 to 6 oz cooked per serving",
      "Zucchini Noodles - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Marinara - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean turkey until fully done and lightly seasoned.",
      "Prepare the zucchini noodles according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the lean turkey, zucchini noodles, and spinach evenly into meal prep containers.",
      "Add the marinara in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean turkey, 4 to 6 oz cooked",
      "Carb: zucchini noodles, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: marinara, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean turkey",
      "Carb source": "zucchini noodles",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "marinara"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Shred",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Lean Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Zucchini Noodles - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini Noodles - portioned for the listed macros",
        "Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Marinara - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-013",
    "title": "Cajun Shrimp Veggie Plate",
    "category": "Weight Loss & Shred",
    "goalType": "Weight loss",
    "calories": 365,
    "protein": 36,
    "carbs": 34,
    "fats": 7,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-013.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Shrimp - 4 to 6 oz cooked per serving",
      "Roasted Sweet Potato - portioned for the listed macros",
      "Zucchini And Peppers - 1 to 2 cups per serving",
      "Cajun Yogurt Drizzle - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shrimp until fully done and lightly seasoned.",
      "Prepare the roasted sweet potato according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the zucchini and peppers based on the recipe style.",
      "Divide the shrimp, roasted sweet potato, and zucchini and peppers evenly into meal prep containers.",
      "Add the cajun yogurt drizzle in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shrimp, 4 to 6 oz cooked",
      "Carb: roasted sweet potato, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: zucchini and peppers, 1 to 2 cups",
      "Fat/Sauce: cajun yogurt drizzle, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shrimp",
      "Carb source": "roasted sweet potato",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "zucchini and peppers",
      "Sauce/flavor source": "cajun yogurt drizzle"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Shrimp - 4 to 6 oz cooked per serving",
        "Cajun Yogurt Drizzle - measured lightly"
      ],
      "Carbs": [
        "Roasted Sweet Potato - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini And Peppers - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-014",
    "title": "Chicken Shawarma Salad Prep",
    "category": "Weight Loss & Shred",
    "goalType": "High protein",
    "calories": 430,
    "protein": 44,
    "carbs": 33,
    "fats": 12,
    "fiber": 8,
    "prepTime": 20,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-014.svg",
    "tags": [
      "High protein",
      "Weight Loss & Shred"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Chickpeas - portioned for the listed macros",
      "Romaine Cucumber Tomato - 1 to 2 cups per serving",
      "Garlic Yogurt Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the chickpeas according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the romaine cucumber tomato based on the recipe style.",
      "Divide the chicken breast, chickpeas, and romaine cucumber tomato evenly into meal prep containers.",
      "Add the garlic yogurt sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: chickpeas, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: romaine cucumber tomato, 1 to 2 cups",
      "Fat/Sauce: garlic yogurt sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "chickpeas",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "romaine cucumber tomato",
      "Sauce/flavor source": "garlic yogurt sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Weight Loss & Shred"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Garlic Yogurt Sauce - measured lightly"
      ],
      "Vegetables": [
        "Romaine Cucumber Tomato - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Garlic Yogurt Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Chickpeas - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-015",
    "title": "Tuna Avocado Cucumber Box",
    "category": "Weight Loss & Shred",
    "goalType": "No Reheat",
    "calories": 340,
    "protein": 35,
    "carbs": 24,
    "fats": 12,
    "fiber": 6,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-015.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "No Reheat",
      "No Reheat Meals",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "ingredients": [
      "Tuna - 4 to 6 oz cooked per serving",
      "Rice Cakes - portioned for the listed macros",
      "Cucumber And Celery - 1 to 2 cups per serving",
      "Avocado Lemon Mix - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tuna until fully done and lightly seasoned.",
      "Prepare the rice cakes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber and celery based on the recipe style.",
      "Divide the tuna, rice cakes, and cucumber and celery evenly into meal prep containers.",
      "Add the avocado lemon mix in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tuna, 4 to 6 oz cooked",
      "Carb: rice cakes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber and celery, 1 to 2 cups",
      "Fat/Sauce: avocado lemon mix, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tuna",
      "Carb source": "rice cakes",
      "Fat source": "avocado lemon mix",
      "Vegetable/fiber source": "cucumber and celery",
      "Sauce/flavor source": "avocado lemon mix"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "No Reheat",
      "No Reheat Meals",
      "Weight Loss & Shred",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Tuna - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice Cakes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber And Celery - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Avocado Lemon Mix - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Avocado Lemon Mix - measured lightly"
      ],
      "Pantry Staples": [
        "Rice Cakes - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Rice Cakes - portioned for the listed macros"
      ]
    }
  },
  {
    "id": "meal-016",
    "title": "Steak Rice Power Bowl",
    "category": "Muscle Gain & Performance",
    "goalType": "Muscle gain",
    "calories": 610,
    "protein": 48,
    "carbs": 62,
    "fats": 18,
    "fiber": 6,
    "prepTime": 20,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-016.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "ingredients": [
      "Sirloin Steak - 4 to 6 oz cooked per serving",
      "Jasmine Rice - portioned for the listed macros",
      "Broccoli - 1 to 2 cups per serving",
      "Chimichurri Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the sirloin steak until fully done and lightly seasoned.",
      "Prepare the jasmine rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli based on the recipe style.",
      "Divide the sirloin steak, jasmine rice, and broccoli evenly into meal prep containers.",
      "Add the chimichurri light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: sirloin steak, 4 to 6 oz cooked",
      "Carb: jasmine rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli, 1 to 2 cups",
      "Fat/Sauce: chimichurri light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "sirloin steak",
      "Carb source": "jasmine rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "broccoli",
      "Sauce/flavor source": "chimichurri light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "grocery": {
      "Carbs": [
        "Jasmine Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Sirloin Steak - 4 to 6 oz cooked per serving",
        "Jasmine Rice - portioned for the listed macros",
        "Chimichurri Light - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-017",
    "title": "Chicken Pesto Pasta Prep",
    "category": "Muscle Gain & Performance",
    "goalType": "Muscle gain",
    "calories": 585,
    "protein": 52,
    "carbs": 58,
    "fats": 16,
    "fiber": 7,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-017.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Protein Pasta - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Light Pesto - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the protein pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the chicken breast, protein pasta, and spinach evenly into meal prep containers.",
      "Add the light pesto in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: protein pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: light pesto, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "protein pasta",
      "Fat source": "light pesto",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "light pesto"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Protein Pasta - portioned for the listed macros"
      ],
      "Carbs": [
        "Protein Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Protein Pasta - portioned for the listed macros",
        "Light Pesto - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-018",
    "title": "Salmon Sweet Potato Plate",
    "category": "Muscle Gain & Performance",
    "goalType": "Performance",
    "calories": 620,
    "protein": 43,
    "carbs": 61,
    "fats": 22,
    "fiber": 8,
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-018.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "ingredients": [
      "Salmon - 4 to 6 oz cooked per serving",
      "Sweet Potato - portioned for the listed macros",
      "Asparagus - 1 to 2 cups per serving",
      "Honey Mustard Glaze - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the salmon until fully done and lightly seasoned.",
      "Prepare the sweet potato according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the asparagus based on the recipe style.",
      "Divide the salmon, sweet potato, and asparagus evenly into meal prep containers.",
      "Add the honey mustard glaze in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: salmon, 4 to 6 oz cooked",
      "Carb: sweet potato, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: asparagus, 1 to 2 cups",
      "Fat/Sauce: honey mustard glaze, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "salmon",
      "Carb source": "sweet potato",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "asparagus",
      "Sauce/flavor source": "honey mustard glaze"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "grocery": {
      "Proteins": [
        "Salmon - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Sweet Potato - portioned for the listed macros"
      ],
      "Vegetables": [
        "Asparagus - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Salmon - 4 to 6 oz cooked per serving"
      ],
      "Sauces & Seasonings": [
        "Honey Mustard Glaze - measured lightly"
      ],
      "Pantry Staples": [
        "Honey Mustard Glaze - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-019",
    "title": "Turkey Meatball Pasta",
    "category": "Muscle Gain & Performance",
    "goalType": "Muscle gain",
    "calories": 560,
    "protein": 47,
    "carbs": 60,
    "fats": 14,
    "fiber": 8,
    "prepTime": 20,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-019.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "ingredients": [
      "Turkey Meatballs - 4 to 6 oz cooked per serving",
      "Whole Wheat Pasta - portioned for the listed macros",
      "Zucchini - 1 to 2 cups per serving",
      "Marinara - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey meatballs until fully done and lightly seasoned.",
      "Prepare the whole wheat pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the zucchini based on the recipe style.",
      "Divide the turkey meatballs, whole wheat pasta, and zucchini evenly into meal prep containers.",
      "Add the marinara in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey meatballs, 4 to 6 oz cooked",
      "Carb: whole wheat pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: zucchini, 1 to 2 cups",
      "Fat/Sauce: marinara, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey meatballs",
      "Carb source": "whole wheat pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "zucchini",
      "Sauce/flavor source": "marinara"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Meatballs - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Wheat Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Marinara - measured lightly"
      ],
      "Pantry Staples": [
        "Whole Wheat Pasta - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-020",
    "title": "High Protein Breakfast Burrito",
    "category": "Muscle Gain & Performance",
    "goalType": "High protein",
    "calories": 520,
    "protein": 42,
    "carbs": 48,
    "fats": 18,
    "fiber": 6,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-020.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance"
    ],
    "ingredients": [
      "Eggs And Turkey Sausage - 4 to 6 oz cooked per serving",
      "Whole Wheat Wrap - portioned for the listed macros",
      "Peppers - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the eggs and turkey sausage until fully done and lightly seasoned.",
      "Prepare the whole wheat wrap according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peppers based on the recipe style.",
      "Divide the eggs and turkey sausage, whole wheat wrap, and peppers evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: eggs and turkey sausage, 4 to 6 oz cooked",
      "Carb: whole wheat wrap, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peppers, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "eggs and turkey sausage",
      "Carb source": "whole wheat wrap",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "peppers",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance"
    ],
    "grocery": {
      "Proteins": [
        "Eggs And Turkey Sausage - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Wheat Wrap - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peppers - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-021",
    "title": "Chicken Teriyaki Rice Bowl",
    "category": "Muscle Gain & Performance",
    "goalType": "Performance",
    "calories": 540,
    "protein": 48,
    "carbs": 62,
    "fats": 9,
    "fiber": 6,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-021.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Jasmine Rice - portioned for the listed macros",
      "Broccoli - 1 to 2 cups per serving",
      "Light Teriyaki - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the jasmine rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli based on the recipe style.",
      "Divide the chicken breast, jasmine rice, and broccoli evenly into meal prep containers.",
      "Add the light teriyaki in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: jasmine rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli, 1 to 2 cups",
      "Fat/Sauce: light teriyaki, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "jasmine rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "broccoli",
      "Sauce/flavor source": "light teriyaki"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Jasmine Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Light Teriyaki - measured lightly"
      ],
      "Pantry Staples": [
        "Jasmine Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-022",
    "title": "Beef and Potato Power Bowl",
    "category": "Muscle Gain & Performance",
    "goalType": "Muscle gain",
    "calories": 590,
    "protein": 46,
    "carbs": 58,
    "fats": 18,
    "fiber": 7,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-022.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain",
      "PMS / Cycle Support"
    ],
    "ingredients": [
      "Lean Beef - 4 to 6 oz cooked per serving",
      "Roasted Potatoes - portioned for the listed macros",
      "Green Beans - 1 to 2 cups per serving",
      "Steak Sauce Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean beef until fully done and lightly seasoned.",
      "Prepare the roasted potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the green beans based on the recipe style.",
      "Divide the lean beef, roasted potatoes, and green beans evenly into meal prep containers.",
      "Add the steak sauce light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean beef, 4 to 6 oz cooked",
      "Carb: roasted potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: green beans, 1 to 2 cups",
      "Fat/Sauce: steak sauce light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean beef",
      "Carb source": "roasted potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "green beans",
      "Sauce/flavor source": "steak sauce light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain",
      "PMS / Cycle Support"
    ],
    "grocery": {
      "Proteins": [
        "Lean Beef - 4 to 6 oz cooked per serving",
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Carbs": [
        "Roasted Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Steak Sauce Light - measured lightly"
      ],
      "Pantry Staples": [
        "Green Beans - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-023",
    "title": "Protein Overnight Oats",
    "category": "Muscle Gain & Performance",
    "goalType": "High protein",
    "calories": 475,
    "protein": 40,
    "carbs": 55,
    "fats": 10,
    "fiber": 8,
    "prepTime": 10,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-023.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance"
    ],
    "ingredients": [
      "Greek Yogurt And Whey - 4 to 6 oz cooked per serving",
      "Rolled Oats - portioned for the listed macros",
      "Berries - 1 to 2 cups per serving",
      "Cinnamon Honey - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt and whey until fully done and lightly seasoned.",
      "Prepare the rolled oats according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries based on the recipe style.",
      "Divide the Greek yogurt and whey, rolled oats, and berries evenly into meal prep containers.",
      "Add the cinnamon honey in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt and whey, 4 to 6 oz cooked",
      "Carb: rolled oats, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries, 1 to 2 cups",
      "Fat/Sauce: cinnamon honey, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt and whey",
      "Carb source": "rolled oats",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries",
      "Sauce/flavor source": "cinnamon honey"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt And Whey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rolled Oats - portioned for the listed macros"
      ],
      "Fruits": [
        "Berries - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Cinnamon Honey - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt And Whey - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Rolled Oats - portioned for the listed macros",
        "Cinnamon Honey - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-024",
    "title": "Greek Yogurt Parfait Prep",
    "category": "Muscle Gain & Performance",
    "goalType": "High protein",
    "calories": 430,
    "protein": 36,
    "carbs": 50,
    "fats": 9,
    "fiber": 7,
    "prepTime": 15,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-024.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance"
    ],
    "ingredients": [
      "Greek Yogurt - 4 to 6 oz cooked per serving",
      "Granola - portioned for the listed macros",
      "Berries - 1 to 2 cups per serving",
      "Honey Drizzle - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt until fully done and lightly seasoned.",
      "Prepare the granola according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries based on the recipe style.",
      "Divide the Greek yogurt, granola, and berries evenly into meal prep containers.",
      "Add the honey drizzle in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt, 4 to 6 oz cooked",
      "Carb: granola, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries, 1 to 2 cups",
      "Fat/Sauce: honey drizzle, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt",
      "Carb source": "granola",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries",
      "Sauce/flavor source": "honey drizzle"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Granola - portioned for the listed macros"
      ],
      "Fruits": [
        "Berries - 1 to 2 cups per serving"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Honey Drizzle - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-025",
    "title": "Chicken Avocado Rice Bowl",
    "category": "Muscle Gain & Performance",
    "goalType": "Muscle gain",
    "calories": 610,
    "protein": 45,
    "carbs": 60,
    "fats": 22,
    "fiber": 7,
    "prepTime": 20,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-025.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "ingredients": [
      "Chicken Thigh - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Corn And Peppers - 1 to 2 cups per serving",
      "Avocado Lime Crema - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken thigh until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the corn and peppers based on the recipe style.",
      "Divide the chicken thigh, rice, and corn and peppers evenly into meal prep containers.",
      "Add the avocado lime crema in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken thigh, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: corn and peppers, 1 to 2 cups",
      "Fat/Sauce: avocado lime crema, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken thigh",
      "Carb source": "rice",
      "Fat source": "avocado lime crema",
      "Vegetable/fiber source": "corn and peppers",
      "Sauce/flavor source": "avocado lime crema"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Thigh - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Corn And Peppers - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Avocado Lime Crema - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Avocado Lime Crema - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-026",
    "title": "Turkey Sweet Potato Hash",
    "category": "Muscle Gain & Performance",
    "goalType": "Performance",
    "calories": 535,
    "protein": 44,
    "carbs": 52,
    "fats": 16,
    "fiber": 8,
    "prepTime": 18,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-026.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "ingredients": [
      "Ground Turkey - 4 to 6 oz cooked per serving",
      "Sweet Potato - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Chipotle Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the ground turkey until fully done and lightly seasoned.",
      "Prepare the sweet potato according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the ground turkey, sweet potato, and spinach evenly into meal prep containers.",
      "Add the chipotle salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: ground turkey, 4 to 6 oz cooked",
      "Carb: sweet potato, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: chipotle salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "ground turkey",
      "Carb source": "sweet potato",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "chipotle salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "grocery": {
      "Proteins": [
        "Ground Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Sweet Potato - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Chipotle Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-027",
    "title": "Shrimp Noodle Performance Bowl",
    "category": "Muscle Gain & Performance",
    "goalType": "Performance",
    "calories": 510,
    "protein": 39,
    "carbs": 68,
    "fats": 8,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-027.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "ingredients": [
      "Shrimp - 4 to 6 oz cooked per serving",
      "Rice Noodles - portioned for the listed macros",
      "Snap Peas And Carrots - 1 to 2 cups per serving",
      "Ginger Soy Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shrimp until fully done and lightly seasoned.",
      "Prepare the rice noodles according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the snap peas and carrots based on the recipe style.",
      "Divide the shrimp, rice noodles, and snap peas and carrots evenly into meal prep containers.",
      "Add the ginger soy sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shrimp, 4 to 6 oz cooked",
      "Carb: rice noodles, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: snap peas and carrots, 1 to 2 cups",
      "Fat/Sauce: ginger soy sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shrimp",
      "Carb source": "rice noodles",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "snap peas and carrots",
      "Sauce/flavor source": "ginger soy sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "grocery": {
      "Proteins": [
        "Shrimp - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice Noodles - portioned for the listed macros"
      ],
      "Vegetables": [
        "Snap Peas And Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Ginger Soy Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice Noodles - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-028",
    "title": "Chicken Alfredo Protein Pasta",
    "category": "Muscle Gain & Performance",
    "goalType": "Muscle gain",
    "calories": 575,
    "protein": 55,
    "carbs": 56,
    "fats": 13,
    "fiber": 8,
    "prepTime": 10,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-028.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Protein Pasta - portioned for the listed macros",
      "Broccoli - 1 to 2 cups per serving",
      "Greek Yogurt Alfredo - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the protein pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli based on the recipe style.",
      "Divide the chicken breast, protein pasta, and broccoli evenly into meal prep containers.",
      "Add the Greek yogurt alfredo in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: protein pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli, 1 to 2 cups",
      "Fat/Sauce: Greek yogurt alfredo, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "protein pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "broccoli",
      "Sauce/flavor source": "Greek yogurt alfredo"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Protein Pasta - portioned for the listed macros",
        "Greek Yogurt Alfredo - measured lightly"
      ],
      "Carbs": [
        "Protein Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli - 1 to 2 cups per serving"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt Alfredo - measured lightly"
      ],
      "Pantry Staples": [
        "Protein Pasta - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-029",
    "title": "Lean Beef Burrito Bowl",
    "category": "Muscle Gain & Performance",
    "goalType": "Muscle gain",
    "calories": 640,
    "protein": 50,
    "carbs": 70,
    "fats": 18,
    "fiber": 11,
    "prepTime": 12,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-029.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "ingredients": [
      "Lean Beef - 4 to 6 oz cooked per serving",
      "Rice And Beans - portioned for the listed macros",
      "Peppers And Lettuce - 1 to 2 cups per serving",
      "Salsa And Avocado - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean beef until fully done and lightly seasoned.",
      "Prepare the rice and beans according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peppers and lettuce based on the recipe style.",
      "Divide the lean beef, rice and beans, and peppers and lettuce evenly into meal prep containers.",
      "Add the salsa and avocado in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean beef, 4 to 6 oz cooked",
      "Carb: rice and beans, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peppers and lettuce, 1 to 2 cups",
      "Fat/Sauce: salsa and avocado, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean beef",
      "Carb source": "rice and beans",
      "Fat source": "salsa and avocado",
      "Vegetable/fiber source": "peppers and lettuce",
      "Sauce/flavor source": "salsa and avocado"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Muscle gain"
    ],
    "grocery": {
      "Proteins": [
        "Lean Beef - 4 to 6 oz cooked per serving",
        "Rice And Beans - portioned for the listed macros"
      ],
      "Carbs": [
        "Rice And Beans - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peppers And Lettuce - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Salsa And Avocado - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Salsa And Avocado - measured lightly"
      ],
      "Pantry Staples": [
        "Rice And Beans - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-030",
    "title": "Banana Almond Protein Oats",
    "category": "Muscle Gain & Performance",
    "goalType": "Performance",
    "calories": 545,
    "protein": 38,
    "carbs": 68,
    "fats": 15,
    "fiber": 10,
    "prepTime": 15,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-030.svg",
    "tags": [
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "ingredients": [
      "Whey Protein - 4 to 6 oz cooked per serving",
      "Oats And Banana - portioned for the listed macros",
      "Chia Seeds - 1 to 2 cups per serving",
      "Almond Butter - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the whey protein until fully done and lightly seasoned.",
      "Prepare the oats and banana according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the chia seeds based on the recipe style.",
      "Divide the whey protein, oats and banana, and chia seeds evenly into meal prep containers.",
      "Add the almond butter in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: whey protein, 4 to 6 oz cooked",
      "Carb: oats and banana, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: chia seeds, 1 to 2 cups",
      "Fat/Sauce: almond butter, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "whey protein",
      "Carb source": "oats and banana",
      "Fat source": "almond butter",
      "Vegetable/fiber source": "chia seeds",
      "Sauce/flavor source": "almond butter"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Muscle Gain & Performance",
      "Performance"
    ],
    "grocery": {
      "Proteins": [
        "Whey Protein - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Oats And Banana - portioned for the listed macros"
      ],
      "Fruits": [
        "Oats And Banana - portioned for the listed macros"
      ],
      "Fats": [
        "Chia Seeds - 1 to 2 cups per serving",
        "Almond Butter - measured lightly"
      ],
      "Pantry Staples": [
        "Oats And Banana - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-031",
    "title": "Tuna Rice Bowl",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 390,
    "protein": 34,
    "carbs": 50,
    "fats": 7,
    "fiber": 5,
    "prepTime": 18,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-031.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Tuna - 4 to 6 oz cooked per serving",
      "White Rice - portioned for the listed macros",
      "Peas And Carrots - 1 to 2 cups per serving",
      "Light Mayo Sriracha - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tuna until fully done and lightly seasoned.",
      "Prepare the white rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peas and carrots based on the recipe style.",
      "Divide the tuna, white rice, and peas and carrots evenly into meal prep containers.",
      "Add the light mayo sriracha in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tuna, 4 to 6 oz cooked",
      "Carb: white rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peas and carrots, 1 to 2 cups",
      "Fat/Sauce: light mayo sriracha, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tuna",
      "Carb source": "white rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "peas and carrots",
      "Sauce/flavor source": "light mayo sriracha"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Tuna - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "White Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peas And Carrots - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "White Rice - portioned for the listed macros",
        "Light Mayo Sriracha - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-032",
    "title": "Egg and Potato Breakfast Box",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 410,
    "protein": 27,
    "carbs": 44,
    "fats": 15,
    "fiber": 5,
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-032.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly"
    ],
    "ingredients": [
      "Eggs - 4 to 6 oz cooked per serving",
      "Potatoes - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Hot Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the eggs until fully done and lightly seasoned.",
      "Prepare the potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the eggs, potatoes, and spinach evenly into meal prep containers.",
      "Add the hot sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: eggs, 4 to 6 oz cooked",
      "Carb: potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: hot sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "eggs",
      "Carb source": "potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "hot sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly"
    ],
    "grocery": {
      "Proteins": [
        "Eggs - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Hot Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-033",
    "title": "Ground Turkey Pasta",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 505,
    "protein": 43,
    "carbs": 57,
    "fats": 12,
    "fiber": 8,
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-033.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "High protein",
      "PMS / Cycle Support"
    ],
    "ingredients": [
      "Lean Ground Turkey - 4 to 6 oz cooked per serving",
      "Pasta - portioned for the listed macros",
      "Frozen Broccoli - 1 to 2 cups per serving",
      "Marinara - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean ground turkey until fully done and lightly seasoned.",
      "Prepare the pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the frozen broccoli based on the recipe style.",
      "Divide the lean ground turkey, pasta, and frozen broccoli evenly into meal prep containers.",
      "Add the marinara in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean ground turkey, 4 to 6 oz cooked",
      "Carb: pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: frozen broccoli, 1 to 2 cups",
      "Fat/Sauce: marinara, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean ground turkey",
      "Carb source": "pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "frozen broccoli",
      "Sauce/flavor source": "marinara"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "High protein",
      "PMS / Cycle Support"
    ],
    "grocery": {
      "Proteins": [
        "Lean Ground Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Frozen Broccoli - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Marinara - measured lightly"
      ],
      "Pantry Staples": [
        "Pasta - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-034",
    "title": "Chicken Thigh Rice Plate",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 520,
    "protein": 39,
    "carbs": 55,
    "fats": 17,
    "fiber": 6,
    "prepTime": 20,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-034.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Chicken Thigh - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Green Beans - 1 to 2 cups per serving",
      "Teriyaki Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken thigh until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the green beans based on the recipe style.",
      "Divide the chicken thigh, rice, and green beans evenly into meal prep containers.",
      "Add the teriyaki light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken thigh, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: green beans, 1 to 2 cups",
      "Fat/Sauce: teriyaki light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken thigh",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "green beans",
      "Sauce/flavor source": "teriyaki light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Thigh - 4 to 6 oz cooked per serving",
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Teriyaki Light - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Green Beans - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-035",
    "title": "Bean and Rice Burrito Bowl",
    "category": "Budget Friendly",
    "goalType": "Plant based",
    "calories": 430,
    "protein": 20,
    "carbs": 72,
    "fats": 8,
    "fiber": 13,
    "prepTime": 12,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-035.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "Plant based"
    ],
    "ingredients": [
      "Black Beans - 4 to 6 oz cooked per serving",
      "Brown Rice - portioned for the listed macros",
      "Corn Lettuce Tomato - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the black beans until fully done and lightly seasoned.",
      "Prepare the brown rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the corn lettuce tomato based on the recipe style.",
      "Divide the black beans, brown rice, and corn lettuce tomato evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: black beans, 4 to 6 oz cooked",
      "Carb: brown rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: corn lettuce tomato, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "black beans",
      "Carb source": "brown rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "corn lettuce tomato",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Black Beans - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Brown Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Corn Lettuce Tomato - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Black Beans - 4 to 6 oz cooked per serving",
        "Brown Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-036",
    "title": "Cottage Cheese Snack Box",
    "category": "Budget Friendly",
    "goalType": "High protein",
    "calories": 330,
    "protein": 30,
    "carbs": 36,
    "fats": 8,
    "fiber": 4,
    "prepTime": 18,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-036.svg",
    "tags": [
      "30 Minute Meals",
      "Budget Friendly",
      "Budget friendly",
      "High protein",
      "Weight loss"
    ],
    "ingredients": [
      "Cottage Cheese - 4 to 6 oz cooked per serving",
      "Whole Grain Crackers - portioned for the listed macros",
      "Berries - 1 to 2 cups per serving",
      "Cinnamon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the cottage cheese until fully done and lightly seasoned.",
      "Prepare the whole grain crackers according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries based on the recipe style.",
      "Divide the cottage cheese, whole grain crackers, and berries evenly into meal prep containers.",
      "Add the cinnamon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: cottage cheese, 4 to 6 oz cooked",
      "Carb: whole grain crackers, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries, 1 to 2 cups",
      "Fat/Sauce: cinnamon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "cottage cheese",
      "Carb source": "whole grain crackers",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries",
      "Sauce/flavor source": "cinnamon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Budget Friendly",
      "Budget friendly",
      "High protein",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Cottage Cheese - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Grain Crackers - portioned for the listed macros"
      ],
      "Fruits": [
        "Berries - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Cinnamon - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Cottage Cheese - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Whole Grain Crackers - portioned for the listed macros"
      ]
    }
  },
  {
    "id": "meal-037",
    "title": "Oats and Banana Protein Jar",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 410,
    "protein": 34,
    "carbs": 58,
    "fats": 7,
    "fiber": 9,
    "prepTime": 20,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-037.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Greek Yogurt - 4 to 6 oz cooked per serving",
      "Oats And Banana - portioned for the listed macros",
      "Chia - 1 to 2 cups per serving",
      "Peanut Butter Powder - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt until fully done and lightly seasoned.",
      "Prepare the oats and banana according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the chia based on the recipe style.",
      "Divide the Greek yogurt, oats and banana, and chia evenly into meal prep containers.",
      "Add the peanut butter powder in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt, 4 to 6 oz cooked",
      "Carb: oats and banana, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: chia, 1 to 2 cups",
      "Fat/Sauce: peanut butter powder, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt",
      "Carb source": "oats and banana",
      "Fat source": "peanut butter powder",
      "Vegetable/fiber source": "chia",
      "Sauce/flavor source": "peanut butter powder"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Oats And Banana - portioned for the listed macros"
      ],
      "Fruits": [
        "Oats And Banana - portioned for the listed macros"
      ],
      "Fats": [
        "Chia - 1 to 2 cups per serving",
        "Peanut Butter Powder - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Oats And Banana - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-038",
    "title": "Turkey Chili",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 445,
    "protein": 41,
    "carbs": 46,
    "fats": 11,
    "fiber": 12,
    "prepTime": 12,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-038.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Ground Turkey - 4 to 6 oz cooked per serving",
      "Beans - portioned for the listed macros",
      "Tomatoes Peppers Onions - 1 to 2 cups per serving",
      "Chili Spices - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the ground turkey until fully done and lightly seasoned.",
      "Prepare the beans according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the tomatoes peppers onions based on the recipe style.",
      "Divide the ground turkey, beans, and tomatoes peppers onions evenly into meal prep containers.",
      "Add the chili spices in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: ground turkey, 4 to 6 oz cooked",
      "Carb: beans, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: tomatoes peppers onions, 1 to 2 cups",
      "Fat/Sauce: chili spices, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "ground turkey",
      "Carb source": "beans",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "tomatoes peppers onions",
      "Sauce/flavor source": "chili spices"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Ground Turkey - 4 to 6 oz cooked per serving",
        "Beans - portioned for the listed macros"
      ],
      "Vegetables": [
        "Tomatoes Peppers Onions - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Chili Spices - measured lightly"
      ],
      "Pantry Staples": [
        "Beans - portioned for the listed macros",
        "Tomatoes Peppers Onions - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-039",
    "title": "Rotisserie Chicken Meal Prep",
    "category": "Budget Friendly",
    "goalType": "Busy week prep",
    "calories": 430,
    "protein": 38,
    "carbs": 47,
    "fats": 10,
    "fiber": 6,
    "prepTime": 20,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-039.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "Busy week prep",
      "High protein"
    ],
    "ingredients": [
      "Rotisserie Chicken Breast - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Frozen Vegetables - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the rotisserie chicken breast until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the frozen vegetables based on the recipe style.",
      "Divide the rotisserie chicken breast, rice, and frozen vegetables evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: rotisserie chicken breast, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: frozen vegetables, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "rotisserie chicken breast",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "frozen vegetables",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "Busy week prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Rotisserie Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Frozen Vegetables - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-040",
    "title": "Lentil Bowl",
    "category": "Budget Friendly",
    "goalType": "Plant based",
    "calories": 455,
    "protein": 24,
    "carbs": 62,
    "fats": 13,
    "fiber": 14,
    "prepTime": 10,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-040.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "Plant based"
    ],
    "ingredients": [
      "Lentils - 4 to 6 oz cooked per serving",
      "Quinoa - portioned for the listed macros",
      "Spinach Carrots - 1 to 2 cups per serving",
      "Lemon Tahini - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lentils until fully done and lightly seasoned.",
      "Prepare the quinoa according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach carrots based on the recipe style.",
      "Divide the lentils, quinoa, and spinach carrots evenly into meal prep containers.",
      "Add the lemon tahini in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lentils, 4 to 6 oz cooked",
      "Carb: quinoa, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach carrots, 1 to 2 cups",
      "Fat/Sauce: lemon tahini, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lentils",
      "Carb source": "quinoa",
      "Fat source": "lemon tahini",
      "Vegetable/fiber source": "spinach carrots",
      "Sauce/flavor source": "lemon tahini"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Lentils - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Quinoa - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach Carrots - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Lemon Tahini - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Lemon Tahini - measured lightly"
      ],
      "Pantry Staples": [
        "Lentils - 4 to 6 oz cooked per serving",
        "Quinoa - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-041",
    "title": "Chicken Egg Fried Rice Light",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 470,
    "protein": 42,
    "carbs": 55,
    "fats": 11,
    "fiber": 5,
    "prepTime": 15,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-041.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Chicken Breast And Egg - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Mixed Vegetables - 1 to 2 cups per serving",
      "Low Sodium Soy - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast and egg until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the mixed vegetables based on the recipe style.",
      "Divide the chicken breast and egg, rice, and mixed vegetables evenly into meal prep containers.",
      "Add the low sodium soy in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast and egg, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: mixed vegetables, 1 to 2 cups",
      "Fat/Sauce: low sodium soy, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast and egg",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "mixed vegetables",
      "Sauce/flavor source": "low sodium soy"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast And Egg - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Sauces & Seasonings": [
        "Low Sodium Soy - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Mixed Vegetables - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-042",
    "title": "Sardine Potato Plate",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 440,
    "protein": 32,
    "carbs": 38,
    "fats": 17,
    "fiber": 6,
    "prepTime": 12,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-042.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Sardines - 4 to 6 oz cooked per serving",
      "Potatoes - portioned for the listed macros",
      "Cucumber Salad - 1 to 2 cups per serving",
      "Mustard Lemon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the sardines until fully done and lightly seasoned.",
      "Prepare the potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber salad based on the recipe style.",
      "Divide the sardines, potatoes, and cucumber salad evenly into meal prep containers.",
      "Add the mustard lemon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: sardines, 4 to 6 oz cooked",
      "Carb: potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber salad, 1 to 2 cups",
      "Fat/Sauce: mustard lemon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "sardines",
      "Carb source": "potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber salad",
      "Sauce/flavor source": "mustard lemon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Sardines - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Salad - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Mustard Lemon - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-043",
    "title": "Turkey Cabbage Skillet",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 425,
    "protein": 39,
    "carbs": 42,
    "fats": 10,
    "fiber": 7,
    "prepTime": 10,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-043.svg",
    "tags": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Lean Turkey - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Cabbage Carrots - 1 to 2 cups per serving",
      "Ginger Soy - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean turkey until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cabbage carrots based on the recipe style.",
      "Divide the lean turkey, rice, and cabbage carrots evenly into meal prep containers.",
      "Add the ginger soy in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean turkey, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cabbage carrots, 1 to 2 cups",
      "Fat/Sauce: ginger soy, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean turkey",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cabbage carrots",
      "Sauce/flavor source": "ginger soy"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Lean Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cabbage Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Ginger Soy - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-044",
    "title": "Egg White Oat Pancake Prep",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 350,
    "protein": 33,
    "carbs": 43,
    "fats": 5,
    "fiber": 6,
    "prepTime": 12,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-044.svg",
    "tags": [
      "30 Minute Meals",
      "Budget Friendly",
      "Budget friendly",
      "High protein",
      "PMS / Cycle Support",
      "Weight loss"
    ],
    "ingredients": [
      "Egg Whites - 4 to 6 oz cooked per serving",
      "Oats - portioned for the listed macros",
      "Berries - 1 to 2 cups per serving",
      "Sugar Free Syrup - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the egg whites until fully done and lightly seasoned.",
      "Prepare the oats according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries based on the recipe style.",
      "Divide the egg whites, oats, and berries evenly into meal prep containers.",
      "Add the sugar free syrup in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: egg whites, 4 to 6 oz cooked",
      "Carb: oats, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries, 1 to 2 cups",
      "Fat/Sauce: sugar free syrup, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "egg whites",
      "Carb source": "oats",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries",
      "Sauce/flavor source": "sugar free syrup"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Budget Friendly",
      "Budget friendly",
      "High protein",
      "PMS / Cycle Support",
      "Weight loss"
    ],
    "grocery": {
      "Carbs": [
        "Oats - portioned for the listed macros"
      ],
      "Fruits": [
        "Berries - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Egg Whites - 4 to 6 oz cooked per serving",
        "Oats - portioned for the listed macros",
        "Sugar Free Syrup - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-045",
    "title": "Chicken Bean Salsa Bowl",
    "category": "Budget Friendly",
    "goalType": "Budget friendly",
    "calories": 465,
    "protein": 44,
    "carbs": 56,
    "fats": 8,
    "fiber": 10,
    "prepTime": 10,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-045.svg",
    "tags": [
      "30 Minute Meals",
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Beans And Rice - portioned for the listed macros",
      "Lettuce - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the beans and rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the lettuce based on the recipe style.",
      "Divide the chicken breast, beans and rice, and lettuce evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: beans and rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: lettuce, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "beans and rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "lettuce",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Budget Friendly",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Beans And Rice - portioned for the listed macros"
      ],
      "Carbs": [
        "Beans And Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Lettuce - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Beans And Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-046",
    "title": "Chicken Rice and Carrots",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Sensitive gut",
    "calories": 380,
    "protein": 39,
    "carbs": 43,
    "fats": 6,
    "fiber": 4,
    "prepTime": 15,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-046.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "White Rice - portioned for the listed macros",
      "Carrots - 1 to 2 cups per serving",
      "Ginger Broth - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the white rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the carrots based on the recipe style.",
      "Divide the chicken breast, white rice, and carrots evenly into meal prep containers.",
      "Add the ginger broth in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: white rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: carrots, 1 to 2 cups",
      "Fat/Sauce: ginger broth, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "white rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "carrots",
      "Sauce/flavor source": "ginger broth"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "White Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Ginger Broth - measured lightly"
      ],
      "Pantry Staples": [
        "White Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-047",
    "title": "Salmon Quinoa Bowl",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Dairy free",
    "calories": 520,
    "protein": 38,
    "carbs": 42,
    "fats": 22,
    "fiber": 6,
    "prepTime": 20,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-047.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Salmon - 4 to 6 oz cooked per serving",
      "Quinoa - portioned for the listed macros",
      "Zucchini - 1 to 2 cups per serving",
      "Lemon Olive Oil - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the salmon until fully done and lightly seasoned.",
      "Prepare the quinoa according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the zucchini based on the recipe style.",
      "Divide the salmon, quinoa, and zucchini evenly into meal prep containers.",
      "Add the lemon olive oil in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: salmon, 4 to 6 oz cooked",
      "Carb: quinoa, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: zucchini, 1 to 2 cups",
      "Fat/Sauce: lemon olive oil, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "salmon",
      "Carb source": "quinoa",
      "Fat source": "lemon olive oil",
      "Vegetable/fiber source": "zucchini",
      "Sauce/flavor source": "lemon olive oil"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Salmon - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Quinoa - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Salmon - 4 to 6 oz cooked per serving",
        "Lemon Olive Oil - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Lemon Olive Oil - measured lightly"
      ],
      "Pantry Staples": [
        "Quinoa - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-048",
    "title": "Turkey Lettuce Cups",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Low carb",
    "calories": 350,
    "protein": 35,
    "carbs": 28,
    "fats": 11,
    "fiber": 4,
    "prepTime": 12,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-048.svg",
    "tags": [
      "30 Minute Meals",
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Low carb",
      "Sensitive gut",
      "Weight loss"
    ],
    "ingredients": [
      "Ground Turkey - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Butter Lettuce And Carrots - 1 to 2 cups per serving",
      "Coconut Aminos - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the ground turkey until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the butter lettuce and carrots based on the recipe style.",
      "Divide the ground turkey, rice, and butter lettuce and carrots evenly into meal prep containers.",
      "Add the coconut aminos in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: ground turkey, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: butter lettuce and carrots, 1 to 2 cups",
      "Fat/Sauce: coconut aminos, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "ground turkey",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "butter lettuce and carrots",
      "Sauce/flavor source": "coconut aminos"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Low carb",
      "Sensitive gut",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Ground Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Butter Lettuce And Carrots - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Butter Lettuce And Carrots - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Coconut Aminos - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-049",
    "title": "Egg Rice Bowl",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Sensitive gut",
    "calories": 425,
    "protein": 25,
    "carbs": 50,
    "fats": 14,
    "fiber": 4,
    "prepTime": 10,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-049.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "Sensitive gut"
    ],
    "ingredients": [
      "Eggs - 4 to 6 oz cooked per serving",
      "Jasmine Rice - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Tamari - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the eggs until fully done and lightly seasoned.",
      "Prepare the jasmine rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the eggs, jasmine rice, and spinach evenly into meal prep containers.",
      "Add the tamari in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: eggs, 4 to 6 oz cooked",
      "Carb: jasmine rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: tamari, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "eggs",
      "Carb source": "jasmine rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "tamari"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Eggs - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Jasmine Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Tamari - measured lightly"
      ],
      "Pantry Staples": [
        "Jasmine Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-050",
    "title": "Shrimp Cucumber Rice Bowl",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Dairy free",
    "calories": 360,
    "protein": 34,
    "carbs": 42,
    "fats": 6,
    "fiber": 4,
    "prepTime": 15,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-050.svg",
    "tags": [
      "30 Minute Meals",
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut",
      "Weight loss"
    ],
    "ingredients": [
      "Shrimp - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Cucumber - 1 to 2 cups per serving",
      "Ginger Lime Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shrimp until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber based on the recipe style.",
      "Divide the shrimp, rice, and cucumber evenly into meal prep containers.",
      "Add the ginger lime sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shrimp, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber, 1 to 2 cups",
      "Fat/Sauce: ginger lime sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shrimp",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber",
      "Sauce/flavor source": "ginger lime sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Shrimp - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Ginger Lime Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-051",
    "title": "Chicken Potato Green Bean Plate",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Sensitive gut",
    "calories": 420,
    "protein": 42,
    "carbs": 43,
    "fats": 9,
    "fiber": 7,
    "prepTime": 15,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-051.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Potatoes - portioned for the listed macros",
      "Green Beans - 1 to 2 cups per serving",
      "Olive Oil Herbs - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the green beans based on the recipe style.",
      "Divide the chicken breast, potatoes, and green beans evenly into meal prep containers.",
      "Add the olive oil herbs in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: green beans, 1 to 2 cups",
      "Fat/Sauce: olive oil herbs, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "potatoes",
      "Fat source": "olive oil herbs",
      "Vegetable/fiber source": "green beans",
      "Sauce/flavor source": "olive oil herbs"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Carbs": [
        "Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Olive Oil Herbs - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Olive Oil Herbs - measured lightly"
      ],
      "Pantry Staples": [
        "Green Beans - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-052",
    "title": "Tofu Rice Veggie Bowl",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Plant based",
    "calories": 430,
    "protein": 26,
    "carbs": 50,
    "fats": 14,
    "fiber": 6,
    "prepTime": 12,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-052.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "Plant based",
      "Sensitive gut"
    ],
    "ingredients": [
      "Tofu - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Zucchini Carrots - 1 to 2 cups per serving",
      "Tamari Sesame - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tofu until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the zucchini carrots based on the recipe style.",
      "Divide the tofu, rice, and zucchini carrots evenly into meal prep containers.",
      "Add the tamari sesame in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tofu, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: zucchini carrots, 1 to 2 cups",
      "Fat/Sauce: tamari sesame, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tofu",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "zucchini carrots",
      "Sauce/flavor source": "tamari sesame"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "Plant based",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Tofu - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Tamari Sesame - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-053",
    "title": "Banana Oat Jar",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Dairy free",
    "calories": 420,
    "protein": 31,
    "carbs": 58,
    "fats": 8,
    "fiber": 9,
    "prepTime": 12,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-053.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Pea Protein - 4 to 6 oz cooked per serving",
      "Oats Banana - portioned for the listed macros",
      "Chia - 1 to 2 cups per serving",
      "Maple Cinnamon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the pea protein until fully done and lightly seasoned.",
      "Prepare the oats banana according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the chia based on the recipe style.",
      "Divide the pea protein, oats banana, and chia evenly into meal prep containers.",
      "Add the maple cinnamon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: pea protein, 4 to 6 oz cooked",
      "Carb: oats banana, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: chia, 1 to 2 cups",
      "Fat/Sauce: maple cinnamon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "pea protein",
      "Carb source": "oats banana",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "chia",
      "Sauce/flavor source": "maple cinnamon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Pea Protein - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Oats Banana - portioned for the listed macros"
      ],
      "Fruits": [
        "Oats Banana - portioned for the listed macros"
      ],
      "Fats": [
        "Chia - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Maple Cinnamon - measured lightly"
      ],
      "Pantry Staples": [
        "Oats Banana - portioned for the listed macros",
        "Maple Cinnamon - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-054",
    "title": "Lean Beef Zucchini Bowl",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Dairy free",
    "calories": 455,
    "protein": 41,
    "carbs": 40,
    "fats": 15,
    "fiber": 5,
    "prepTime": 10,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-054.svg",
    "tags": [
      "30 Minute Meals",
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Lean Beef - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Zucchini - 1 to 2 cups per serving",
      "Tomato Basil Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean beef until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the zucchini based on the recipe style.",
      "Divide the lean beef, rice, and zucchini evenly into meal prep containers.",
      "Add the tomato basil sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean beef, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: zucchini, 1 to 2 cups",
      "Fat/Sauce: tomato basil sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean beef",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "zucchini",
      "Sauce/flavor source": "tomato basil sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Lean Beef - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini - 1 to 2 cups per serving",
        "Tomato Basil Sauce - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Tomato Basil Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-055",
    "title": "Turkey Stuffed Peppers",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Sensitive gut",
    "calories": 390,
    "protein": 36,
    "carbs": 38,
    "fats": 10,
    "fiber": 6,
    "prepTime": 18,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-055.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "PMS / Cycle Support",
      "Sensitive gut"
    ],
    "ingredients": [
      "Ground Turkey - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Bell Peppers - 1 to 2 cups per serving",
      "Tomato Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the ground turkey until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the bell peppers based on the recipe style.",
      "Divide the ground turkey, rice, and bell peppers evenly into meal prep containers.",
      "Add the tomato sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: ground turkey, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: bell peppers, 1 to 2 cups",
      "Fat/Sauce: tomato sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "ground turkey",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "bell peppers",
      "Sauce/flavor source": "tomato sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "PMS / Cycle Support",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Ground Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Bell Peppers - 1 to 2 cups per serving",
        "Tomato Sauce - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Tomato Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-056",
    "title": "Chicken Coconut Curry Rice",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Dairy free",
    "calories": 475,
    "protein": 42,
    "carbs": 49,
    "fats": 14,
    "fiber": 6,
    "prepTime": 10,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-056.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Carrots Spinach - 1 to 2 cups per serving",
      "Light Coconut Curry - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the carrots spinach based on the recipe style.",
      "Divide the chicken breast, rice, and carrots spinach evenly into meal prep containers.",
      "Add the light coconut curry in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: carrots spinach, 1 to 2 cups",
      "Fat/Sauce: light coconut curry, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "carrots spinach",
      "Sauce/flavor source": "light coconut curry"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Carrots Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Light Coconut Curry - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-057",
    "title": "Cod Potato Dill Plate",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Sensitive gut",
    "calories": 395,
    "protein": 37,
    "carbs": 40,
    "fats": 9,
    "fiber": 5,
    "prepTime": 12,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-057.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Cod - 4 to 6 oz cooked per serving",
      "Potatoes - portioned for the listed macros",
      "Asparagus - 1 to 2 cups per serving",
      "Lemon Dill Olive Oil - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the cod until fully done and lightly seasoned.",
      "Prepare the potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the asparagus based on the recipe style.",
      "Divide the cod, potatoes, and asparagus evenly into meal prep containers.",
      "Add the lemon dill olive oil in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: cod, 4 to 6 oz cooked",
      "Carb: potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: asparagus, 1 to 2 cups",
      "Fat/Sauce: lemon dill olive oil, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "cod",
      "Carb source": "potatoes",
      "Fat source": "lemon dill olive oil",
      "Vegetable/fiber source": "asparagus",
      "Sauce/flavor source": "lemon dill olive oil"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Cod - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Asparagus - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Lemon Dill Olive Oil - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Lemon Dill Olive Oil - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-058",
    "title": "Turkey Rice Soup Prep",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Sensitive gut",
    "calories": 340,
    "protein": 34,
    "carbs": 36,
    "fats": 7,
    "fiber": 4,
    "prepTime": 15,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-058.svg",
    "tags": [
      "30 Minute Meals",
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut",
      "Weight loss"
    ],
    "ingredients": [
      "Turkey - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Carrots Celery - 1 to 2 cups per serving",
      "Herb Broth - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the carrots celery based on the recipe style.",
      "Divide the turkey, rice, and carrots celery evenly into meal prep containers.",
      "Add the herb broth in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: carrots celery, 1 to 2 cups",
      "Fat/Sauce: herb broth, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "carrots celery",
      "Sauce/flavor source": "herb broth"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Carrots Celery - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Herb Broth - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-059",
    "title": "Shrimp Pineapple Rice Bowl",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Dairy free",
    "calories": 405,
    "protein": 35,
    "carbs": 55,
    "fats": 5,
    "fiber": 4,
    "prepTime": 12,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-059.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Shrimp - 4 to 6 oz cooked per serving",
      "Jasmine Rice - portioned for the listed macros",
      "Pineapple Cucumber - 1 to 2 cups per serving",
      "Lime Cilantro - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shrimp until fully done and lightly seasoned.",
      "Prepare the jasmine rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the pineapple cucumber based on the recipe style.",
      "Divide the shrimp, jasmine rice, and pineapple cucumber evenly into meal prep containers.",
      "Add the lime cilantro in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shrimp, 4 to 6 oz cooked",
      "Carb: jasmine rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: pineapple cucumber, 1 to 2 cups",
      "Fat/Sauce: lime cilantro, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shrimp",
      "Carb source": "jasmine rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "pineapple cucumber",
      "Sauce/flavor source": "lime cilantro"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Shrimp - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Jasmine Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Pineapple Cucumber - 1 to 2 cups per serving"
      ],
      "Fruits": [
        "Pineapple Cucumber - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lime Cilantro - measured lightly"
      ],
      "Pantry Staples": [
        "Jasmine Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-060",
    "title": "Chicken Quinoa Cucumber Box",
    "category": "Dairy Free / Sensitive Gut",
    "goalType": "Dairy free",
    "calories": 430,
    "protein": 43,
    "carbs": 39,
    "fats": 12,
    "fiber": 6,
    "prepTime": 10,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-060.svg",
    "tags": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Quinoa - portioned for the listed macros",
      "Cucumber Carrots - 1 to 2 cups per serving",
      "Lemon Olive Oil - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the quinoa according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber carrots based on the recipe style.",
      "Divide the chicken breast, quinoa, and cucumber carrots evenly into meal prep containers.",
      "Add the lemon olive oil in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: quinoa, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber carrots, 1 to 2 cups",
      "Fat/Sauce: lemon olive oil, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "quinoa",
      "Fat source": "lemon olive oil",
      "Vegetable/fiber source": "cucumber carrots",
      "Sauce/flavor source": "lemon olive oil"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dairy Free / Sensitive Gut",
      "Dairy free",
      "High protein",
      "Sensitive gut"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Quinoa - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Carrots - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Lemon Olive Oil - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Lemon Olive Oil - measured lightly"
      ],
      "Pantry Staples": [
        "Quinoa - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-061",
    "title": "Tofu Teriyaki Bowl",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 460,
    "protein": 28,
    "carbs": 58,
    "fats": 14,
    "fiber": 6,
    "prepTime": 12,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-061.svg",
    "tags": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Tofu - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Broccoli - 1 to 2 cups per serving",
      "Teriyaki Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tofu until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli based on the recipe style.",
      "Divide the tofu, rice, and broccoli evenly into meal prep containers.",
      "Add the teriyaki light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tofu, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli, 1 to 2 cups",
      "Fat/Sauce: teriyaki light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tofu",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "broccoli",
      "Sauce/flavor source": "teriyaki light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Tofu - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Teriyaki Light - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-062",
    "title": "Lentil Curry Bowl",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 500,
    "protein": 25,
    "carbs": 78,
    "fats": 10,
    "fiber": 15,
    "prepTime": 10,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-062.svg",
    "tags": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Lentils - 4 to 6 oz cooked per serving",
      "Basmati Rice - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Curry Tomato Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lentils until fully done and lightly seasoned.",
      "Prepare the basmati rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the lentils, basmati rice, and spinach evenly into meal prep containers.",
      "Add the curry tomato sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lentils, 4 to 6 oz cooked",
      "Carb: basmati rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: curry tomato sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lentils",
      "Carb source": "basmati rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "curry tomato sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Lentils - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Basmati Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving",
        "Curry Tomato Sauce - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Curry Tomato Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Lentils - 4 to 6 oz cooked per serving",
        "Basmati Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-063",
    "title": "Chickpea Quinoa Salad",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 470,
    "protein": 22,
    "carbs": 61,
    "fats": 16,
    "fiber": 13,
    "prepTime": 15,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-063.svg",
    "tags": [
      "30 Minute Meals",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Chickpeas - 4 to 6 oz cooked per serving",
      "Quinoa - portioned for the listed macros",
      "Cucumber Tomato Parsley - 1 to 2 cups per serving",
      "Lemon Tahini - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chickpeas until fully done and lightly seasoned.",
      "Prepare the quinoa according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber tomato parsley based on the recipe style.",
      "Divide the chickpeas, quinoa, and cucumber tomato parsley evenly into meal prep containers.",
      "Add the lemon tahini in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chickpeas, 4 to 6 oz cooked",
      "Carb: quinoa, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber tomato parsley, 1 to 2 cups",
      "Fat/Sauce: lemon tahini, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chickpeas",
      "Carb source": "quinoa",
      "Fat source": "lemon tahini",
      "Vegetable/fiber source": "cucumber tomato parsley",
      "Sauce/flavor source": "lemon tahini"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Carbs": [
        "Quinoa - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Tomato Parsley - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Lemon Tahini - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Lemon Tahini - measured lightly"
      ],
      "Pantry Staples": [
        "Chickpeas - 4 to 6 oz cooked per serving",
        "Quinoa - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-064",
    "title": "Vegan Burrito Bowl",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 520,
    "protein": 22,
    "carbs": 78,
    "fats": 15,
    "fiber": 15,
    "prepTime": 12,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-064.svg",
    "tags": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Black Beans - 4 to 6 oz cooked per serving",
      "Brown Rice - portioned for the listed macros",
      "Corn Lettuce Peppers - 1 to 2 cups per serving",
      "Salsa Guacamole - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the black beans until fully done and lightly seasoned.",
      "Prepare the brown rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the corn lettuce peppers based on the recipe style.",
      "Divide the black beans, brown rice, and corn lettuce peppers evenly into meal prep containers.",
      "Add the salsa guacamole in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: black beans, 4 to 6 oz cooked",
      "Carb: brown rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: corn lettuce peppers, 1 to 2 cups",
      "Fat/Sauce: salsa guacamole, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "black beans",
      "Carb source": "brown rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "corn lettuce peppers",
      "Sauce/flavor source": "salsa guacamole"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Black Beans - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Brown Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Corn Lettuce Peppers - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa Guacamole - measured lightly"
      ],
      "Pantry Staples": [
        "Black Beans - 4 to 6 oz cooked per serving",
        "Brown Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-065",
    "title": "Tempeh Rice Plate",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 550,
    "protein": 33,
    "carbs": 58,
    "fats": 21,
    "fiber": 8,
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-065.svg",
    "tags": [
      "High protein",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Tempeh - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Green Beans - 1 to 2 cups per serving",
      "Sesame Ginger Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tempeh until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the green beans based on the recipe style.",
      "Divide the tempeh, rice, and green beans evenly into meal prep containers.",
      "Add the sesame ginger sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tempeh, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: green beans, 1 to 2 cups",
      "Fat/Sauce: sesame ginger sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tempeh",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "green beans",
      "Sauce/flavor source": "sesame ginger sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Tempeh - 4 to 6 oz cooked per serving",
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Sesame Ginger Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Green Beans - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-066",
    "title": "Black Bean Sweet Potato Bowl",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 480,
    "protein": 20,
    "carbs": 76,
    "fats": 12,
    "fiber": 15,
    "prepTime": 12,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-066.svg",
    "tags": [
      "PMS / Cycle Support",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Black Beans - 4 to 6 oz cooked per serving",
      "Sweet Potato - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Lime Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the black beans until fully done and lightly seasoned.",
      "Prepare the sweet potato according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the black beans, sweet potato, and spinach evenly into meal prep containers.",
      "Add the lime salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: black beans, 4 to 6 oz cooked",
      "Carb: sweet potato, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: lime salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "black beans",
      "Carb source": "sweet potato",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "lime salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "PMS / Cycle Support",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Black Beans - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Sweet Potato - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lime Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Black Beans - 4 to 6 oz cooked per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-067",
    "title": "Vegan Overnight Oats",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 430,
    "protein": 31,
    "carbs": 55,
    "fats": 10,
    "fiber": 10,
    "prepTime": 20,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-067.svg",
    "tags": [
      "High protein",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Pea Protein - 4 to 6 oz cooked per serving",
      "Oats - portioned for the listed macros",
      "Berries Chia - 1 to 2 cups per serving",
      "Maple Cinnamon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the pea protein until fully done and lightly seasoned.",
      "Prepare the oats according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries chia based on the recipe style.",
      "Divide the pea protein, oats, and berries chia evenly into meal prep containers.",
      "Add the maple cinnamon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: pea protein, 4 to 6 oz cooked",
      "Carb: oats, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries chia, 1 to 2 cups",
      "Fat/Sauce: maple cinnamon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "pea protein",
      "Carb source": "oats",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries chia",
      "Sauce/flavor source": "maple cinnamon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Pea Protein - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Oats - portioned for the listed macros"
      ],
      "Fruits": [
        "Berries Chia - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Berries Chia - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Maple Cinnamon - measured lightly"
      ],
      "Pantry Staples": [
        "Oats - portioned for the listed macros",
        "Maple Cinnamon - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-068",
    "title": "Edamame Noodle Bowl",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 500,
    "protein": 29,
    "carbs": 66,
    "fats": 14,
    "fiber": 9,
    "prepTime": 15,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-068.svg",
    "tags": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Edamame - 4 to 6 oz cooked per serving",
      "Soba Noodles - portioned for the listed macros",
      "Carrots Cucumber - 1 to 2 cups per serving",
      "Soy Ginger Dressing - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the edamame until fully done and lightly seasoned.",
      "Prepare the soba noodles according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the carrots cucumber based on the recipe style.",
      "Divide the edamame, soba noodles, and carrots cucumber evenly into meal prep containers.",
      "Add the soy ginger dressing in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: edamame, 4 to 6 oz cooked",
      "Carb: soba noodles, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: carrots cucumber, 1 to 2 cups",
      "Fat/Sauce: soy ginger dressing, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "edamame",
      "Carb source": "soba noodles",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "carrots cucumber",
      "Sauce/flavor source": "soy ginger dressing"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Edamame - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Soba Noodles - portioned for the listed macros"
      ],
      "Vegetables": [
        "Carrots Cucumber - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Soy Ginger Dressing - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-069",
    "title": "Vegan Chili",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 465,
    "protein": 24,
    "carbs": 72,
    "fats": 9,
    "fiber": 17,
    "prepTime": 10,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-069.svg",
    "tags": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Beans And Lentils - 4 to 6 oz cooked per serving",
      "Sweet Potato - portioned for the listed macros",
      "Tomatoes Peppers - 1 to 2 cups per serving",
      "Chili Spices - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the beans and lentils until fully done and lightly seasoned.",
      "Prepare the sweet potato according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the tomatoes peppers based on the recipe style.",
      "Divide the beans and lentils, sweet potato, and tomatoes peppers evenly into meal prep containers.",
      "Add the chili spices in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: beans and lentils, 4 to 6 oz cooked",
      "Carb: sweet potato, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: tomatoes peppers, 1 to 2 cups",
      "Fat/Sauce: chili spices, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "beans and lentils",
      "Carb source": "sweet potato",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "tomatoes peppers",
      "Sauce/flavor source": "chili spices"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Beans And Lentils - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Sweet Potato - portioned for the listed macros"
      ],
      "Vegetables": [
        "Tomatoes Peppers - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Chili Spices - measured lightly"
      ],
      "Pantry Staples": [
        "Beans And Lentils - 4 to 6 oz cooked per serving",
        "Tomatoes Peppers - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-070",
    "title": "Hummus Veggie Snack Box",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 360,
    "protein": 14,
    "carbs": 46,
    "fats": 14,
    "fiber": 9,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-070.svg",
    "tags": [
      "30 Minute Meals",
      "Plant Based & Vegan",
      "Plant based",
      "Weight loss"
    ],
    "ingredients": [
      "Hummus - 4 to 6 oz cooked per serving",
      "Whole Grain Pita - portioned for the listed macros",
      "Cucumber Carrots Peppers - 1 to 2 cups per serving",
      "Everything Seasoning - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the hummus until fully done and lightly seasoned.",
      "Prepare the whole grain pita according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber carrots peppers based on the recipe style.",
      "Divide the hummus, whole grain pita, and cucumber carrots peppers evenly into meal prep containers.",
      "Add the everything seasoning in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: hummus, 4 to 6 oz cooked",
      "Carb: whole grain pita, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber carrots peppers, 1 to 2 cups",
      "Fat/Sauce: everything seasoning, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "hummus",
      "Carb source": "whole grain pita",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber carrots peppers",
      "Sauce/flavor source": "everything seasoning"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Plant Based & Vegan",
      "Plant based",
      "Weight loss"
    ],
    "grocery": {
      "Carbs": [
        "Whole Grain Pita - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Carrots Peppers - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Hummus - 4 to 6 oz cooked per serving",
        "Everything Seasoning - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-071",
    "title": "Crispy Tofu Quinoa Bowl",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 505,
    "protein": 30,
    "carbs": 55,
    "fats": 18,
    "fiber": 9,
    "prepTime": 12,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-071.svg",
    "tags": [
      "High protein",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Tofu - 4 to 6 oz cooked per serving",
      "Quinoa - portioned for the listed macros",
      "Broccoli Carrots - 1 to 2 cups per serving",
      "Sriracha Lime Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tofu until fully done and lightly seasoned.",
      "Prepare the quinoa according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli carrots based on the recipe style.",
      "Divide the tofu, quinoa, and broccoli carrots evenly into meal prep containers.",
      "Add the sriracha lime sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tofu, 4 to 6 oz cooked",
      "Carb: quinoa, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli carrots, 1 to 2 cups",
      "Fat/Sauce: sriracha lime sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tofu",
      "Carb source": "quinoa",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "broccoli carrots",
      "Sauce/flavor source": "sriracha lime sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Tofu - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Quinoa - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Sriracha Lime Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Quinoa - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-072",
    "title": "Chickpea Pasta Marinara",
    "category": "Plant Based & Vegan",
    "goalType": "High protein",
    "calories": 515,
    "protein": 32,
    "carbs": 64,
    "fats": 13,
    "fiber": 12,
    "prepTime": 18,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-072.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Chickpea Pasta - 4 to 6 oz cooked per serving",
      "Chickpea Pasta - portioned for the listed macros",
      "Spinach Mushrooms - 1 to 2 cups per serving",
      "Marinara - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chickpea pasta until fully done and lightly seasoned.",
      "Prepare the chickpea pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach mushrooms based on the recipe style.",
      "Divide the chickpea pasta, chickpea pasta, and spinach mushrooms evenly into meal prep containers.",
      "Add the marinara in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chickpea pasta, 4 to 6 oz cooked",
      "Carb: chickpea pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach mushrooms, 1 to 2 cups",
      "Fat/Sauce: marinara, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chickpea pasta",
      "Carb source": "chickpea pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach mushrooms",
      "Sauce/flavor source": "marinara"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Carbs": [
        "Chickpea Pasta - 4 to 6 oz cooked per serving",
        "Chickpea Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach Mushrooms - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Marinara - measured lightly"
      ],
      "Pantry Staples": [
        "Chickpea Pasta - 4 to 6 oz cooked per serving",
        "Chickpea Pasta - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-073",
    "title": "Vegan Taco Lentil Bowl",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 455,
    "protein": 24,
    "carbs": 70,
    "fats": 9,
    "fiber": 14,
    "prepTime": 12,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-073.svg",
    "tags": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Lentils - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Lettuce Tomato Corn - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lentils until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the lettuce tomato corn based on the recipe style.",
      "Divide the lentils, rice, and lettuce tomato corn evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lentils, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: lettuce tomato corn, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lentils",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "lettuce tomato corn",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Lentils - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Lettuce Tomato Corn - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Lentils - 4 to 6 oz cooked per serving",
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-074",
    "title": "Peanut Tofu Noodle Prep",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 560,
    "protein": 29,
    "carbs": 68,
    "fats": 20,
    "fiber": 8,
    "prepTime": 18,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-074.svg",
    "tags": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "Tofu - 4 to 6 oz cooked per serving",
      "Rice Noodles - portioned for the listed macros",
      "Cabbage Carrots - 1 to 2 cups per serving",
      "Light Peanut Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tofu until fully done and lightly seasoned.",
      "Prepare the rice noodles according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cabbage carrots based on the recipe style.",
      "Divide the tofu, rice noodles, and cabbage carrots evenly into meal prep containers.",
      "Add the light peanut sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tofu, 4 to 6 oz cooked",
      "Carb: rice noodles, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cabbage carrots, 1 to 2 cups",
      "Fat/Sauce: light peanut sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tofu",
      "Carb source": "rice noodles",
      "Fat source": "light peanut sauce",
      "Vegetable/fiber source": "cabbage carrots",
      "Sauce/flavor source": "light peanut sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "Tofu - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice Noodles - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cabbage Carrots - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Light Peanut Sauce - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Light Peanut Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice Noodles - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-075",
    "title": "White Bean Kale Bowl",
    "category": "Plant Based & Vegan",
    "goalType": "Plant based",
    "calories": 480,
    "protein": 24,
    "carbs": 68,
    "fats": 12,
    "fiber": 15,
    "prepTime": 18,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-075.svg",
    "tags": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "ingredients": [
      "White Beans - 4 to 6 oz cooked per serving",
      "Farro - portioned for the listed macros",
      "Kale Carrots - 1 to 2 cups per serving",
      "Lemon Herb Dressing - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the white beans until fully done and lightly seasoned.",
      "Prepare the farro according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the kale carrots based on the recipe style.",
      "Divide the white beans, farro, and kale carrots evenly into meal prep containers.",
      "Add the lemon herb dressing in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: white beans, 4 to 6 oz cooked",
      "Carb: farro, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: kale carrots, 1 to 2 cups",
      "Fat/Sauce: lemon herb dressing, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "white beans",
      "Carb source": "farro",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "kale carrots",
      "Sauce/flavor source": "lemon herb dressing"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Plant Based & Vegan",
      "Plant based"
    ],
    "grocery": {
      "Proteins": [
        "White Beans - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Farro - portioned for the listed macros"
      ],
      "Vegetables": [
        "Kale Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Herb Dressing - measured lightly"
      ],
      "Pantry Staples": [
        "White Beans - 4 to 6 oz cooked per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-076",
    "title": "Classic Protein Overnight Oats",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 430,
    "protein": 38,
    "carbs": 48,
    "fats": 9,
    "fiber": 7,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-076.svg",
    "tags": [
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Greek Yogurt And Whey - 4 to 6 oz cooked per serving",
      "Oats - portioned for the listed macros",
      "Berries - 1 to 2 cups per serving",
      "Cinnamon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt and whey until fully done and lightly seasoned.",
      "Prepare the oats according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries based on the recipe style.",
      "Divide the Greek yogurt and whey, oats, and berries evenly into meal prep containers.",
      "Add the cinnamon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt and whey, 4 to 6 oz cooked",
      "Carb: oats, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries, 1 to 2 cups",
      "Fat/Sauce: cinnamon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt and whey",
      "Carb source": "oats",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries",
      "Sauce/flavor source": "cinnamon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt And Whey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Oats - portioned for the listed macros"
      ],
      "Fruits": [
        "Berries - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Cinnamon - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt And Whey - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Oats - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-077",
    "title": "Egg White Muffin Cups",
    "category": "Breakfast Prep",
    "goalType": "Weight loss",
    "calories": 320,
    "protein": 34,
    "carbs": 26,
    "fats": 8,
    "fiber": 5,
    "prepTime": 10,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-077.svg",
    "tags": [
      "30 Minute Meals",
      "Breakfast Prep",
      "High protein",
      "Low carb",
      "PMS / Cycle Support",
      "Weight loss"
    ],
    "ingredients": [
      "Egg Whites And Turkey - 4 to 6 oz cooked per serving",
      "Small Potatoes - portioned for the listed macros",
      "Spinach Peppers - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the egg whites and turkey until fully done and lightly seasoned.",
      "Prepare the small potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach peppers based on the recipe style.",
      "Divide the egg whites and turkey, small potatoes, and spinach peppers evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: egg whites and turkey, 4 to 6 oz cooked",
      "Carb: small potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach peppers, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "egg whites and turkey",
      "Carb source": "small potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach peppers",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Breakfast Prep",
      "High protein",
      "Low carb",
      "PMS / Cycle Support",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Egg Whites And Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Small Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach Peppers - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-078",
    "title": "Turkey Sausage Breakfast Bowl",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 445,
    "protein": 37,
    "carbs": 42,
    "fats": 14,
    "fiber": 5,
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-078.svg",
    "tags": [
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Turkey Sausage - 4 to 6 oz cooked per serving",
      "Potatoes - portioned for the listed macros",
      "Peppers Onions - 1 to 2 cups per serving",
      "Hot Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey sausage until fully done and lightly seasoned.",
      "Prepare the potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peppers onions based on the recipe style.",
      "Divide the turkey sausage, potatoes, and peppers onions evenly into meal prep containers.",
      "Add the hot sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey sausage, 4 to 6 oz cooked",
      "Carb: potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peppers onions, 1 to 2 cups",
      "Fat/Sauce: hot sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey sausage",
      "Carb source": "potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "peppers onions",
      "Sauce/flavor source": "hot sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Sausage - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peppers Onions - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Hot Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-079",
    "title": "Greek Yogurt Fruit Jars",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 390,
    "protein": 32,
    "carbs": 48,
    "fats": 8,
    "fiber": 6,
    "prepTime": 20,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-079.svg",
    "tags": [
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Greek Yogurt - 4 to 6 oz cooked per serving",
      "Granola - portioned for the listed macros",
      "Berries - 1 to 2 cups per serving",
      "Honey - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt until fully done and lightly seasoned.",
      "Prepare the granola according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries based on the recipe style.",
      "Divide the Greek yogurt, granola, and berries evenly into meal prep containers.",
      "Add the honey in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt, 4 to 6 oz cooked",
      "Carb: granola, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries, 1 to 2 cups",
      "Fat/Sauce: honey, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt",
      "Carb source": "granola",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries",
      "Sauce/flavor source": "honey"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Granola - portioned for the listed macros"
      ],
      "Fruits": [
        "Berries - 1 to 2 cups per serving"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Honey - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-080",
    "title": "Breakfast Burrito Bowls",
    "category": "Breakfast Prep",
    "goalType": "Busy week prep",
    "calories": 460,
    "protein": 35,
    "carbs": 46,
    "fats": 15,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-080.svg",
    "tags": [
      "Breakfast Prep",
      "Busy week prep",
      "High protein"
    ],
    "ingredients": [
      "Eggs And Turkey - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Peppers Spinach - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the eggs and turkey until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peppers spinach based on the recipe style.",
      "Divide the eggs and turkey, rice, and peppers spinach evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: eggs and turkey, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peppers spinach, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "eggs and turkey",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "peppers spinach",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "Busy week prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Eggs And Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peppers Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-081",
    "title": "Cottage Cheese Fruit Box",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 360,
    "protein": 32,
    "carbs": 39,
    "fats": 8,
    "fiber": 5,
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-081.svg",
    "tags": [
      "30 Minute Meals",
      "Breakfast Prep",
      "High protein",
      "Weight loss"
    ],
    "ingredients": [
      "Cottage Cheese - 4 to 6 oz cooked per serving",
      "Whole Grain Toast - portioned for the listed macros",
      "Pineapple Berries - 1 to 2 cups per serving",
      "Cinnamon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the cottage cheese until fully done and lightly seasoned.",
      "Prepare the whole grain toast according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the pineapple berries based on the recipe style.",
      "Divide the cottage cheese, whole grain toast, and pineapple berries evenly into meal prep containers.",
      "Add the cinnamon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: cottage cheese, 4 to 6 oz cooked",
      "Carb: whole grain toast, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: pineapple berries, 1 to 2 cups",
      "Fat/Sauce: cinnamon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "cottage cheese",
      "Carb source": "whole grain toast",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "pineapple berries",
      "Sauce/flavor source": "cinnamon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Breakfast Prep",
      "High protein",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Cottage Cheese - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Grain Toast - portioned for the listed macros"
      ],
      "Fruits": [
        "Pineapple Berries - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Cinnamon - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Cottage Cheese - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-082",
    "title": "Protein Pancakes Meal Prep",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 420,
    "protein": 39,
    "carbs": 48,
    "fats": 8,
    "fiber": 6,
    "prepTime": 18,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-082.svg",
    "tags": [
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Whey And Egg Whites - 4 to 6 oz cooked per serving",
      "Oat Flour - portioned for the listed macros",
      "Berries - 1 to 2 cups per serving",
      "Sugar Free Syrup - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the whey and egg whites until fully done and lightly seasoned.",
      "Prepare the oat flour according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries based on the recipe style.",
      "Divide the whey and egg whites, oat flour, and berries evenly into meal prep containers.",
      "Add the sugar free syrup in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: whey and egg whites, 4 to 6 oz cooked",
      "Carb: oat flour, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries, 1 to 2 cups",
      "Fat/Sauce: sugar free syrup, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "whey and egg whites",
      "Carb source": "oat flour",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries",
      "Sauce/flavor source": "sugar free syrup"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Whey And Egg Whites - 4 to 6 oz cooked per serving"
      ],
      "Fruits": [
        "Berries - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Oat Flour - portioned for the listed macros",
        "Sugar Free Syrup - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-083",
    "title": "Chia Pudding Jars",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 380,
    "protein": 28,
    "carbs": 38,
    "fats": 14,
    "fiber": 12,
    "prepTime": 12,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-083.svg",
    "tags": [
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Greek Yogurt - 4 to 6 oz cooked per serving",
      "Chia And Oats - portioned for the listed macros",
      "Strawberries - 1 to 2 cups per serving",
      "Vanilla - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt until fully done and lightly seasoned.",
      "Prepare the chia and oats according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the strawberries based on the recipe style.",
      "Divide the Greek yogurt, chia and oats, and strawberries evenly into meal prep containers.",
      "Add the vanilla in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt, 4 to 6 oz cooked",
      "Carb: chia and oats, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: strawberries, 1 to 2 cups",
      "Fat/Sauce: vanilla, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt",
      "Carb source": "chia and oats",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "strawberries",
      "Sauce/flavor source": "vanilla"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Chia And Oats - portioned for the listed macros"
      ],
      "Fruits": [
        "Strawberries - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Chia And Oats - portioned for the listed macros"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Chia And Oats - portioned for the listed macros",
        "Vanilla - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-084",
    "title": "Oatmeal Egg White Bowl",
    "category": "Breakfast Prep",
    "goalType": "Budget friendly",
    "calories": 390,
    "protein": 32,
    "carbs": 55,
    "fats": 5,
    "fiber": 7,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-084.svg",
    "tags": [
      "Breakfast Prep",
      "Budget friendly",
      "High protein"
    ],
    "ingredients": [
      "Egg Whites - 4 to 6 oz cooked per serving",
      "Oats - portioned for the listed macros",
      "Banana - 1 to 2 cups per serving",
      "Cinnamon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the egg whites until fully done and lightly seasoned.",
      "Prepare the oats according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the banana based on the recipe style.",
      "Divide the egg whites, oats, and banana evenly into meal prep containers.",
      "Add the cinnamon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: egg whites, 4 to 6 oz cooked",
      "Carb: oats, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: banana, 1 to 2 cups",
      "Fat/Sauce: cinnamon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "egg whites",
      "Carb source": "oats",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "banana",
      "Sauce/flavor source": "cinnamon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "Budget friendly",
      "High protein"
    ],
    "grocery": {
      "Carbs": [
        "Oats - portioned for the listed macros",
        "Banana - 1 to 2 cups per serving"
      ],
      "Fruits": [
        "Banana - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Cinnamon - measured lightly"
      ],
      "Pantry Staples": [
        "Egg Whites - 4 to 6 oz cooked per serving",
        "Oats - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-085",
    "title": "Smoked Salmon Egg Box",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 440,
    "protein": 34,
    "carbs": 34,
    "fats": 18,
    "fiber": 5,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-085.svg",
    "tags": [
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Smoked Salmon And Eggs - 4 to 6 oz cooked per serving",
      "Whole Grain Toast - portioned for the listed macros",
      "Cucumber Greens - 1 to 2 cups per serving",
      "Dill Mustard - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the smoked salmon and eggs until fully done and lightly seasoned.",
      "Prepare the whole grain toast according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber greens based on the recipe style.",
      "Divide the smoked salmon and eggs, whole grain toast, and cucumber greens evenly into meal prep containers.",
      "Add the dill mustard in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: smoked salmon and eggs, 4 to 6 oz cooked",
      "Carb: whole grain toast, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber greens, 1 to 2 cups",
      "Fat/Sauce: dill mustard, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "smoked salmon and eggs",
      "Carb source": "whole grain toast",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber greens",
      "Sauce/flavor source": "dill mustard"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Smoked Salmon And Eggs - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Grain Toast - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Greens - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Smoked Salmon And Eggs - 4 to 6 oz cooked per serving"
      ],
      "Sauces & Seasonings": [
        "Dill Mustard - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-086",
    "title": "Apple Cinnamon Protein Oats",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 415,
    "protein": 35,
    "carbs": 55,
    "fats": 8,
    "fiber": 9,
    "prepTime": 12,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-086.svg",
    "tags": [
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Whey - 4 to 6 oz cooked per serving",
      "Oats Apple - portioned for the listed macros",
      "Flax - 1 to 2 cups per serving",
      "Cinnamon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the whey until fully done and lightly seasoned.",
      "Prepare the oats apple according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the flax based on the recipe style.",
      "Divide the whey, oats apple, and flax evenly into meal prep containers.",
      "Add the cinnamon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: whey, 4 to 6 oz cooked",
      "Carb: oats apple, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: flax, 1 to 2 cups",
      "Fat/Sauce: cinnamon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "whey",
      "Carb source": "oats apple",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "flax",
      "Sauce/flavor source": "cinnamon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Whey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Oats Apple - portioned for the listed macros"
      ],
      "Fruits": [
        "Oats Apple - portioned for the listed macros"
      ],
      "Sauces & Seasonings": [
        "Cinnamon - measured lightly"
      ],
      "Pantry Staples": [
        "Oats Apple - portioned for the listed macros",
        "Flax - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-087",
    "title": "Spinach Feta Egg Bake",
    "category": "Breakfast Prep",
    "goalType": "Breakfast Prep",
    "calories": 405,
    "protein": 34,
    "carbs": 32,
    "fats": 16,
    "fiber": 5,
    "prepTime": 10,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-087.svg",
    "tags": [
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Eggs And Egg Whites - 4 to 6 oz cooked per serving",
      "Potatoes - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Feta Herbs - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the eggs and egg whites until fully done and lightly seasoned.",
      "Prepare the potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the eggs and egg whites, potatoes, and spinach evenly into meal prep containers.",
      "Add the feta herbs in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: eggs and egg whites, 4 to 6 oz cooked",
      "Carb: potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: feta herbs, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "eggs and egg whites",
      "Carb source": "potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "feta herbs"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Eggs And Egg Whites - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Feta Herbs - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Feta Herbs - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-088",
    "title": "Turkey Bacon Breakfast Wrap",
    "category": "Breakfast Prep",
    "goalType": "Breakfast Prep",
    "calories": 450,
    "protein": 36,
    "carbs": 42,
    "fats": 15,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-088.svg",
    "tags": [
      "Breakfast Prep",
      "High protein",
      "PMS / Cycle Support"
    ],
    "ingredients": [
      "Turkey Bacon And Eggs - 4 to 6 oz cooked per serving",
      "Whole Wheat Wrap - portioned for the listed macros",
      "Spinach Tomato - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey bacon and eggs until fully done and lightly seasoned.",
      "Prepare the whole wheat wrap according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach tomato based on the recipe style.",
      "Divide the turkey bacon and eggs, whole wheat wrap, and spinach tomato evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey bacon and eggs, 4 to 6 oz cooked",
      "Carb: whole wheat wrap, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach tomato, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey bacon and eggs",
      "Carb source": "whole wheat wrap",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach tomato",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Breakfast Prep",
      "High protein",
      "PMS / Cycle Support"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Bacon And Eggs - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Wheat Wrap - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach Tomato - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-089",
    "title": "Berry Smoothie Freezer Packs",
    "category": "Breakfast Prep",
    "goalType": "30 Minute Meals",
    "calories": 365,
    "protein": 30,
    "carbs": 51,
    "fats": 6,
    "fiber": 8,
    "prepTime": 15,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-089.svg",
    "tags": [
      "30 Minute Meals",
      "Breakfast Prep",
      "High protein",
      "Weight loss"
    ],
    "ingredients": [
      "Protein Powder - 4 to 6 oz cooked per serving",
      "Banana Oats - portioned for the listed macros",
      "Berries Spinach - 1 to 2 cups per serving",
      "Almond Milk - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the protein powder until fully done and lightly seasoned.",
      "Prepare the banana oats according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries spinach based on the recipe style.",
      "Divide the protein powder, banana oats, and berries spinach evenly into meal prep containers.",
      "Add the almond milk in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: protein powder, 4 to 6 oz cooked",
      "Carb: banana oats, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries spinach, 1 to 2 cups",
      "Fat/Sauce: almond milk, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "protein powder",
      "Carb source": "banana oats",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries spinach",
      "Sauce/flavor source": "almond milk"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Breakfast Prep",
      "High protein",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Protein Powder - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Banana Oats - portioned for the listed macros"
      ],
      "Vegetables": [
        "Berries Spinach - 1 to 2 cups per serving"
      ],
      "Fruits": [
        "Banana Oats - portioned for the listed macros",
        "Berries Spinach - 1 to 2 cups per serving"
      ],
      "Dairy & Alternatives": [
        "Almond Milk - measured lightly"
      ],
      "Pantry Staples": [
        "Banana Oats - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Protein Powder - 4 to 6 oz cooked per serving"
      ]
    }
  },
  {
    "id": "meal-090",
    "title": "Savory Chicken Breakfast Hash",
    "category": "Breakfast Prep",
    "goalType": "High protein",
    "calories": 430,
    "protein": 42,
    "carbs": 40,
    "fats": 10,
    "fiber": 6,
    "prepTime": 10,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-090.svg",
    "tags": [
      "30 Minute Meals",
      "Breakfast Prep",
      "High protein"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Potatoes - portioned for the listed macros",
      "Peppers Spinach - 1 to 2 cups per serving",
      "Hot Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peppers spinach based on the recipe style.",
      "Divide the chicken breast, potatoes, and peppers spinach evenly into meal prep containers.",
      "Add the hot sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peppers spinach, 1 to 2 cups",
      "Fat/Sauce: hot sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "peppers spinach",
      "Sauce/flavor source": "hot sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Breakfast Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peppers Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Hot Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-091",
    "title": "Chicken Caesar Protein Box",
    "category": "Lunch Prep",
    "goalType": "High protein",
    "calories": 410,
    "protein": 44,
    "carbs": 28,
    "fats": 13,
    "fiber": 5,
    "prepTime": 10,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-091.svg",
    "tags": [
      "High protein",
      "Low carb",
      "Lunch Prep"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Whole Grain Croutons - portioned for the listed macros",
      "Romaine - 1 to 2 cups per serving",
      "Greek Yogurt Caesar - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the whole grain croutons according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the romaine based on the recipe style.",
      "Divide the chicken breast, whole grain croutons, and romaine evenly into meal prep containers.",
      "Add the Greek yogurt Caesar in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: whole grain croutons, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: romaine, 1 to 2 cups",
      "Fat/Sauce: Greek yogurt Caesar, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "whole grain croutons",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "romaine",
      "Sauce/flavor source": "Greek yogurt Caesar"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Low carb",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Greek Yogurt Caesar - measured lightly"
      ],
      "Vegetables": [
        "Romaine - 1 to 2 cups per serving"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt Caesar - measured lightly"
      ],
      "Pantry Staples": [
        "Whole Grain Croutons - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-092",
    "title": "Turkey Hummus Wrap Box",
    "category": "Lunch Prep",
    "goalType": "No Reheat",
    "calories": 390,
    "protein": 34,
    "carbs": 41,
    "fats": 10,
    "fiber": 7,
    "prepTime": 12,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-092.svg",
    "tags": [
      "High protein",
      "Lunch Prep",
      "No Reheat",
      "No Reheat Meals"
    ],
    "ingredients": [
      "Turkey Breast - 4 to 6 oz cooked per serving",
      "Whole Wheat Wrap - portioned for the listed macros",
      "Lettuce Cucumber - 1 to 2 cups per serving",
      "Hummus Mustard - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey breast until fully done and lightly seasoned.",
      "Prepare the whole wheat wrap according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the lettuce cucumber based on the recipe style.",
      "Divide the turkey breast, whole wheat wrap, and lettuce cucumber evenly into meal prep containers.",
      "Add the hummus mustard in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey breast, 4 to 6 oz cooked",
      "Carb: whole wheat wrap, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: lettuce cucumber, 1 to 2 cups",
      "Fat/Sauce: hummus mustard, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey breast",
      "Carb source": "whole wheat wrap",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "lettuce cucumber",
      "Sauce/flavor source": "hummus mustard"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep",
      "No Reheat",
      "No Reheat Meals"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Wheat Wrap - portioned for the listed macros"
      ],
      "Vegetables": [
        "Lettuce Cucumber - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Hummus Mustard - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-093",
    "title": "Shrimp Quinoa Lunch Bowl",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 425,
    "protein": 37,
    "carbs": 43,
    "fats": 11,
    "fiber": 7,
    "prepTime": 15,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-093.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Shrimp - 4 to 6 oz cooked per serving",
      "Quinoa - portioned for the listed macros",
      "Tomato Cucumber Spinach - 1 to 2 cups per serving",
      "Lemon Vinaigrette - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shrimp until fully done and lightly seasoned.",
      "Prepare the quinoa according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the tomato cucumber spinach based on the recipe style.",
      "Divide the shrimp, quinoa, and tomato cucumber spinach evenly into meal prep containers.",
      "Add the lemon vinaigrette in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shrimp, 4 to 6 oz cooked",
      "Carb: quinoa, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: tomato cucumber spinach, 1 to 2 cups",
      "Fat/Sauce: lemon vinaigrette, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shrimp",
      "Carb source": "quinoa",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "tomato cucumber spinach",
      "Sauce/flavor source": "lemon vinaigrette"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Shrimp - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Quinoa - portioned for the listed macros"
      ],
      "Vegetables": [
        "Tomato Cucumber Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Vinaigrette - measured lightly"
      ],
      "Pantry Staples": [
        "Quinoa - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-094",
    "title": "Chicken Sushi Bowl",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 500,
    "protein": 44,
    "carbs": 60,
    "fats": 10,
    "fiber": 7,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-094.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Sushi Rice - portioned for the listed macros",
      "Cucumber Carrots Edamame - 1 to 2 cups per serving",
      "Spicy Yogurt Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the sushi rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber carrots edamame based on the recipe style.",
      "Divide the chicken breast, sushi rice, and cucumber carrots edamame evenly into meal prep containers.",
      "Add the spicy yogurt sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: sushi rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber carrots edamame, 1 to 2 cups",
      "Fat/Sauce: spicy yogurt sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "sushi rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber carrots edamame",
      "Sauce/flavor source": "spicy yogurt sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Cucumber Carrots Edamame - 1 to 2 cups per serving",
        "Spicy Yogurt Sauce - measured lightly"
      ],
      "Carbs": [
        "Sushi Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Carrots Edamame - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Spicy Yogurt Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Sushi Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-095",
    "title": "Beef Taco Salad Prep",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 430,
    "protein": 38,
    "carbs": 36,
    "fats": 15,
    "fiber": 7,
    "prepTime": 10,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-095.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Lean Beef - 4 to 6 oz cooked per serving",
      "Tortilla Strips - portioned for the listed macros",
      "Romaine Tomato Corn - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean beef until fully done and lightly seasoned.",
      "Prepare the tortilla strips according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the romaine tomato corn based on the recipe style.",
      "Divide the lean beef, tortilla strips, and romaine tomato corn evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean beef, 4 to 6 oz cooked",
      "Carb: tortilla strips, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: romaine tomato corn, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean beef",
      "Carb source": "tortilla strips",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "romaine tomato corn",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Lean Beef - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Tortilla Strips - portioned for the listed macros"
      ],
      "Vegetables": [
        "Romaine Tomato Corn - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-096",
    "title": "Turkey Pita Protein Box",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 385,
    "protein": 33,
    "carbs": 40,
    "fats": 9,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-096.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Turkey Slices - 4 to 6 oz cooked per serving",
      "Pita - portioned for the listed macros",
      "Cucumber Carrots - 1 to 2 cups per serving",
      "Tzatziki Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey slices until fully done and lightly seasoned.",
      "Prepare the pita according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber carrots based on the recipe style.",
      "Divide the turkey slices, pita, and cucumber carrots evenly into meal prep containers.",
      "Add the tzatziki light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey slices, 4 to 6 oz cooked",
      "Carb: pita, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber carrots, 1 to 2 cups",
      "Fat/Sauce: tzatziki light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey slices",
      "Carb source": "pita",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber carrots",
      "Sauce/flavor source": "tzatziki light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Slices - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Pita - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Carrots - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Tzatziki Light - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-097",
    "title": "Salmon Cucumber Rice Box",
    "category": "Lunch Prep",
    "goalType": "High protein",
    "calories": 520,
    "protein": 38,
    "carbs": 52,
    "fats": 18,
    "fiber": 6,
    "prepTime": 10,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-097.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Salmon - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Cucumber Edamame - 1 to 2 cups per serving",
      "Soy Ginger - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the salmon until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber edamame based on the recipe style.",
      "Divide the salmon, rice, and cucumber edamame evenly into meal prep containers.",
      "Add the soy ginger in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: salmon, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber edamame, 1 to 2 cups",
      "Fat/Sauce: soy ginger, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "salmon",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber edamame",
      "Sauce/flavor source": "soy ginger"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Salmon - 4 to 6 oz cooked per serving",
        "Cucumber Edamame - 1 to 2 cups per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Edamame - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Salmon - 4 to 6 oz cooked per serving"
      ],
      "Sauces & Seasonings": [
        "Soy Ginger - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-098",
    "title": "Chicken Caprese Meal Box",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 485,
    "protein": 43,
    "carbs": 50,
    "fats": 12,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-098.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Pasta - portioned for the listed macros",
      "Tomatoes Spinach - 1 to 2 cups per serving",
      "Balsamic Glaze - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the tomatoes spinach based on the recipe style.",
      "Divide the chicken breast, pasta, and tomatoes spinach evenly into meal prep containers.",
      "Add the balsamic glaze in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: tomatoes spinach, 1 to 2 cups",
      "Fat/Sauce: balsamic glaze, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "tomatoes spinach",
      "Sauce/flavor source": "balsamic glaze"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Tomatoes Spinach - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Pasta - portioned for the listed macros",
        "Tomatoes Spinach - 1 to 2 cups per serving",
        "Balsamic Glaze - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-099",
    "title": "Tuna Pasta Salad Prep",
    "category": "Lunch Prep",
    "goalType": "High protein",
    "calories": 455,
    "protein": 42,
    "carbs": 48,
    "fats": 8,
    "fiber": 7,
    "prepTime": 18,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-099.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Lunch Prep",
      "PMS / Cycle Support"
    ],
    "ingredients": [
      "Tuna - 4 to 6 oz cooked per serving",
      "Protein Pasta - portioned for the listed macros",
      "Celery Peas - 1 to 2 cups per serving",
      "Greek Yogurt Dressing - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tuna until fully done and lightly seasoned.",
      "Prepare the protein pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the celery peas based on the recipe style.",
      "Divide the tuna, protein pasta, and celery peas evenly into meal prep containers.",
      "Add the Greek yogurt dressing in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tuna, 4 to 6 oz cooked",
      "Carb: protein pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: celery peas, 1 to 2 cups",
      "Fat/Sauce: Greek yogurt dressing, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tuna",
      "Carb source": "protein pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "celery peas",
      "Sauce/flavor source": "Greek yogurt dressing"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Lunch Prep",
      "PMS / Cycle Support"
    ],
    "grocery": {
      "Proteins": [
        "Tuna - 4 to 6 oz cooked per serving",
        "Protein Pasta - portioned for the listed macros",
        "Greek Yogurt Dressing - measured lightly"
      ],
      "Carbs": [
        "Protein Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Celery Peas - 1 to 2 cups per serving"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt Dressing - measured lightly"
      ],
      "Pantry Staples": [
        "Protein Pasta - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-100",
    "title": "Buffalo Turkey Rice Bowl",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 445,
    "protein": 40,
    "carbs": 49,
    "fats": 10,
    "fiber": 5,
    "prepTime": 12,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-100.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Ground Turkey - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Celery Carrots - 1 to 2 cups per serving",
      "Buffalo Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the ground turkey until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the celery carrots based on the recipe style.",
      "Divide the ground turkey, rice, and celery carrots evenly into meal prep containers.",
      "Add the buffalo sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: ground turkey, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: celery carrots, 1 to 2 cups",
      "Fat/Sauce: buffalo sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "ground turkey",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "celery carrots",
      "Sauce/flavor source": "buffalo sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Ground Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Celery Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Buffalo Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-101",
    "title": "Chicken Cobb Prep Box",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 510,
    "protein": 45,
    "carbs": 38,
    "fats": 20,
    "fiber": 7,
    "prepTime": 20,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-101.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Chicken Breast And Egg - 4 to 6 oz cooked per serving",
      "Small Potatoes - portioned for the listed macros",
      "Romaine Tomato - 1 to 2 cups per serving",
      "Avocado Ranch Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast and egg until fully done and lightly seasoned.",
      "Prepare the small potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the romaine tomato based on the recipe style.",
      "Divide the chicken breast and egg, small potatoes, and romaine tomato evenly into meal prep containers.",
      "Add the avocado ranch light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast and egg, 4 to 6 oz cooked",
      "Carb: small potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: romaine tomato, 1 to 2 cups",
      "Fat/Sauce: avocado ranch light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast and egg",
      "Carb source": "small potatoes",
      "Fat source": "avocado ranch light",
      "Vegetable/fiber source": "romaine tomato",
      "Sauce/flavor source": "avocado ranch light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast And Egg - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Small Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Romaine Tomato - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Avocado Ranch Light - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-102",
    "title": "Mediterranean Tuna Box",
    "category": "Lunch Prep",
    "goalType": "No Reheat",
    "calories": 420,
    "protein": 36,
    "carbs": 39,
    "fats": 14,
    "fiber": 7,
    "prepTime": 15,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-102.svg",
    "tags": [
      "High protein",
      "Lunch Prep",
      "No Reheat",
      "No Reheat Meals"
    ],
    "ingredients": [
      "Tuna - 4 to 6 oz cooked per serving",
      "Quinoa - portioned for the listed macros",
      "Cucumber Tomato Olives - 1 to 2 cups per serving",
      "Lemon Herb Dressing - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tuna until fully done and lightly seasoned.",
      "Prepare the quinoa according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber tomato olives based on the recipe style.",
      "Divide the tuna, quinoa, and cucumber tomato olives evenly into meal prep containers.",
      "Add the lemon herb dressing in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tuna, 4 to 6 oz cooked",
      "Carb: quinoa, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber tomato olives, 1 to 2 cups",
      "Fat/Sauce: lemon herb dressing, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tuna",
      "Carb source": "quinoa",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber tomato olives",
      "Sauce/flavor source": "lemon herb dressing"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep",
      "No Reheat",
      "No Reheat Meals"
    ],
    "grocery": {
      "Proteins": [
        "Tuna - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Quinoa - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Tomato Olives - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Herb Dressing - measured lightly"
      ],
      "Pantry Staples": [
        "Quinoa - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-103",
    "title": "Turkey Meatloaf Lunch Plate",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 480,
    "protein": 43,
    "carbs": 46,
    "fats": 14,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-103.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Turkey Meatloaf - 4 to 6 oz cooked per serving",
      "Mashed Potatoes - portioned for the listed macros",
      "Green Beans - 1 to 2 cups per serving",
      "Tomato Glaze - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey meatloaf until fully done and lightly seasoned.",
      "Prepare the mashed potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the green beans based on the recipe style.",
      "Divide the turkey meatloaf, mashed potatoes, and green beans evenly into meal prep containers.",
      "Add the tomato glaze in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey meatloaf, 4 to 6 oz cooked",
      "Carb: mashed potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: green beans, 1 to 2 cups",
      "Fat/Sauce: tomato glaze, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey meatloaf",
      "Carb source": "mashed potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "green beans",
      "Sauce/flavor source": "tomato glaze"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Meatloaf - 4 to 6 oz cooked per serving",
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Carbs": [
        "Mashed Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Green Beans - 1 to 2 cups per serving",
        "Tomato Glaze - measured lightly"
      ],
      "Pantry Staples": [
        "Green Beans - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-104",
    "title": "Chicken Burrito Lettuce Bowl",
    "category": "Lunch Prep",
    "goalType": "Lunch Prep",
    "calories": 455,
    "protein": 43,
    "carbs": 51,
    "fats": 8,
    "fiber": 9,
    "prepTime": 20,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-104.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Rice Beans - portioned for the listed macros",
      "Lettuce Pico - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the rice beans according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the lettuce pico based on the recipe style.",
      "Divide the chicken breast, rice beans, and lettuce pico evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: rice beans, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: lettuce pico, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "rice beans",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "lettuce pico",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Rice Beans - portioned for the listed macros"
      ],
      "Carbs": [
        "Rice Beans - portioned for the listed macros"
      ],
      "Vegetables": [
        "Lettuce Pico - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Rice Beans - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-105",
    "title": "Steak Salad Lunch Box",
    "category": "Lunch Prep",
    "goalType": "High protein",
    "calories": 495,
    "protein": 42,
    "carbs": 38,
    "fats": 18,
    "fiber": 6,
    "prepTime": 12,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-105.svg",
    "tags": [
      "High protein",
      "Lunch Prep"
    ],
    "ingredients": [
      "Steak - 4 to 6 oz cooked per serving",
      "Roasted Potatoes - portioned for the listed macros",
      "Greens Peppers - 1 to 2 cups per serving",
      "Balsamic Mustard - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the steak until fully done and lightly seasoned.",
      "Prepare the roasted potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the greens peppers based on the recipe style.",
      "Divide the steak, roasted potatoes, and greens peppers evenly into meal prep containers.",
      "Add the balsamic mustard in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: steak, 4 to 6 oz cooked",
      "Carb: roasted potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: greens peppers, 1 to 2 cups",
      "Fat/Sauce: balsamic mustard, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "steak",
      "Carb source": "roasted potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "greens peppers",
      "Sauce/flavor source": "balsamic mustard"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "High protein",
      "Lunch Prep"
    ],
    "grocery": {
      "Carbs": [
        "Roasted Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Greens Peppers - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Balsamic Mustard - measured lightly"
      ],
      "Pantry Staples": [
        "Steak - 4 to 6 oz cooked per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-106",
    "title": "Garlic Chicken Broccoli Rice",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 470,
    "protein": 45,
    "carbs": 50,
    "fats": 9,
    "fiber": 6,
    "prepTime": 12,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-106.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Broccoli - 1 to 2 cups per serving",
      "Garlic Soy Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli based on the recipe style.",
      "Divide the chicken breast, rice, and broccoli evenly into meal prep containers.",
      "Add the garlic soy sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli, 1 to 2 cups",
      "Fat/Sauce: garlic soy sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "broccoli",
      "Sauce/flavor source": "garlic soy sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Garlic Soy Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-107",
    "title": "Turkey Lasagna Bowls",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 520,
    "protein": 47,
    "carbs": 54,
    "fats": 14,
    "fiber": 7,
    "prepTime": 10,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-107.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Ground Turkey - 4 to 6 oz cooked per serving",
      "Whole Wheat Pasta - portioned for the listed macros",
      "Zucchini Spinach - 1 to 2 cups per serving",
      "Marinara Ricotta Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the ground turkey until fully done and lightly seasoned.",
      "Prepare the whole wheat pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the zucchini spinach based on the recipe style.",
      "Divide the ground turkey, whole wheat pasta, and zucchini spinach evenly into meal prep containers.",
      "Add the marinara ricotta light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: ground turkey, 4 to 6 oz cooked",
      "Carb: whole wheat pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: zucchini spinach, 1 to 2 cups",
      "Fat/Sauce: marinara ricotta light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "ground turkey",
      "Carb source": "whole wheat pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "zucchini spinach",
      "Sauce/flavor source": "marinara ricotta light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Ground Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Wheat Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Marinara Ricotta Light - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Marinara Ricotta Light - measured lightly"
      ],
      "Pantry Staples": [
        "Whole Wheat Pasta - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-108",
    "title": "Honey Garlic Salmon Plate",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 575,
    "protein": 40,
    "carbs": 55,
    "fats": 20,
    "fiber": 5,
    "prepTime": 12,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-108.svg",
    "tags": [
      "30 Minute Meals",
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Salmon - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Green Beans - 1 to 2 cups per serving",
      "Honey Garlic Glaze - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the salmon until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the green beans based on the recipe style.",
      "Divide the salmon, rice, and green beans evenly into meal prep containers.",
      "Add the honey garlic glaze in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: salmon, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: green beans, 1 to 2 cups",
      "Fat/Sauce: honey garlic glaze, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "salmon",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "green beans",
      "Sauce/flavor source": "honey garlic glaze"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Salmon - 4 to 6 oz cooked per serving",
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Green Beans - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Salmon - 4 to 6 oz cooked per serving"
      ],
      "Sauces & Seasonings": [
        "Honey Garlic Glaze - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Green Beans - 1 to 2 cups per serving",
        "Honey Garlic Glaze - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-109",
    "title": "Shrimp Taco Rice Plate",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 450,
    "protein": 36,
    "carbs": 52,
    "fats": 10,
    "fiber": 6,
    "prepTime": 12,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-109.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Shrimp - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Cabbage Slaw - 1 to 2 cups per serving",
      "Lime Crema Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shrimp until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cabbage slaw based on the recipe style.",
      "Divide the shrimp, rice, and cabbage slaw evenly into meal prep containers.",
      "Add the lime crema light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shrimp, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cabbage slaw, 1 to 2 cups",
      "Fat/Sauce: lime crema light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shrimp",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cabbage slaw",
      "Sauce/flavor source": "lime crema light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Shrimp - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cabbage Slaw - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lime Crema Light - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-110",
    "title": "Chicken Meatball Orzo Prep",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 510,
    "protein": 44,
    "carbs": 55,
    "fats": 13,
    "fiber": 6,
    "prepTime": 18,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-110.svg",
    "tags": [
      "Dinner Prep",
      "High protein",
      "PMS / Cycle Support"
    ],
    "ingredients": [
      "Chicken Meatballs - 4 to 6 oz cooked per serving",
      "Orzo - portioned for the listed macros",
      "Spinach Tomatoes - 1 to 2 cups per serving",
      "Lemon Herb Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken meatballs until fully done and lightly seasoned.",
      "Prepare the orzo according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach tomatoes based on the recipe style.",
      "Divide the chicken meatballs, orzo, and spinach tomatoes evenly into meal prep containers.",
      "Add the lemon herb sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken meatballs, 4 to 6 oz cooked",
      "Carb: orzo, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach tomatoes, 1 to 2 cups",
      "Fat/Sauce: lemon herb sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken meatballs",
      "Carb source": "orzo",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach tomatoes",
      "Sauce/flavor source": "lemon herb sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein",
      "PMS / Cycle Support"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Meatballs - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Orzo - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach Tomatoes - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Herb Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Spinach Tomatoes - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-111",
    "title": "Beef Stir Fry Rice Bowl",
    "category": "Dinner Prep",
    "goalType": "High protein",
    "calories": 555,
    "protein": 46,
    "carbs": 57,
    "fats": 16,
    "fiber": 6,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-111.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Lean Beef - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Broccoli Peppers - 1 to 2 cups per serving",
      "Ginger Soy - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the lean beef until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli peppers based on the recipe style.",
      "Divide the lean beef, rice, and broccoli peppers evenly into meal prep containers.",
      "Add the ginger soy in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: lean beef, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli peppers, 1 to 2 cups",
      "Fat/Sauce: ginger soy, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "lean beef",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "broccoli peppers",
      "Sauce/flavor source": "ginger soy"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Lean Beef - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli Peppers - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Ginger Soy - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-112",
    "title": "Turkey Shepherd Bowl",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 500,
    "protein": 42,
    "carbs": 52,
    "fats": 12,
    "fiber": 7,
    "prepTime": 10,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-112.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Ground Turkey - 4 to 6 oz cooked per serving",
      "Mashed Potatoes - portioned for the listed macros",
      "Peas Carrots - 1 to 2 cups per serving",
      "Gravy Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the ground turkey until fully done and lightly seasoned.",
      "Prepare the mashed potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peas carrots based on the recipe style.",
      "Divide the ground turkey, mashed potatoes, and peas carrots evenly into meal prep containers.",
      "Add the gravy light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: ground turkey, 4 to 6 oz cooked",
      "Carb: mashed potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peas carrots, 1 to 2 cups",
      "Fat/Sauce: gravy light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "ground turkey",
      "Carb source": "mashed potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "peas carrots",
      "Sauce/flavor source": "gravy light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Ground Turkey - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Mashed Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peas Carrots - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Gravy Light - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-113",
    "title": "Chicken Parmesan Light Prep",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 540,
    "protein": 52,
    "carbs": 52,
    "fats": 13,
    "fiber": 6,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-113.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Pasta - portioned for the listed macros",
      "Zucchini - 1 to 2 cups per serving",
      "Marinara Mozzarella Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the zucchini based on the recipe style.",
      "Divide the chicken breast, pasta, and zucchini evenly into meal prep containers.",
      "Add the marinara mozzarella light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: zucchini, 1 to 2 cups",
      "Fat/Sauce: marinara mozzarella light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "zucchini",
      "Sauce/flavor source": "marinara mozzarella light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Zucchini - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Marinara Mozzarella Light - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Marinara Mozzarella Light - measured lightly"
      ],
      "Pantry Staples": [
        "Pasta - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-114",
    "title": "Cod Rice Veggie Plate",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 395,
    "protein": 38,
    "carbs": 43,
    "fats": 7,
    "fiber": 5,
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-114.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Cod - 4 to 6 oz cooked per serving",
      "Rice - portioned for the listed macros",
      "Asparagus Carrots - 1 to 2 cups per serving",
      "Lemon Caper Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the cod until fully done and lightly seasoned.",
      "Prepare the rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the asparagus carrots based on the recipe style.",
      "Divide the cod, rice, and asparagus carrots evenly into meal prep containers.",
      "Add the lemon caper sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: cod, 4 to 6 oz cooked",
      "Carb: rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: asparagus carrots, 1 to 2 cups",
      "Fat/Sauce: lemon caper sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "cod",
      "Carb source": "rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "asparagus carrots",
      "Sauce/flavor source": "lemon caper sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Cod - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Asparagus Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Caper Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-115",
    "title": "Chicken Tikka Rice Bowl",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 520,
    "protein": 47,
    "carbs": 56,
    "fats": 12,
    "fiber": 6,
    "prepTime": 12,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-115.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Basmati Rice - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Tikka Yogurt Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the basmati rice according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the chicken breast, basmati rice, and spinach evenly into meal prep containers.",
      "Add the tikka yogurt sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: basmati rice, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: tikka yogurt sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "basmati rice",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "tikka yogurt sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving",
        "Tikka Yogurt Sauce - measured lightly"
      ],
      "Carbs": [
        "Basmati Rice - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Tikka Yogurt Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Basmati Rice - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-116",
    "title": "Steak Sweet Potato Dinner",
    "category": "Dinner Prep",
    "goalType": "High protein",
    "calories": 590,
    "protein": 47,
    "carbs": 54,
    "fats": 19,
    "fiber": 8,
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-116.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Sirloin Steak - 4 to 6 oz cooked per serving",
      "Sweet Potato - portioned for the listed macros",
      "Broccoli - 1 to 2 cups per serving",
      "Garlic Herb Butter Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the sirloin steak until fully done and lightly seasoned.",
      "Prepare the sweet potato according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the broccoli based on the recipe style.",
      "Divide the sirloin steak, sweet potato, and broccoli evenly into meal prep containers.",
      "Add the garlic herb butter light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: sirloin steak, 4 to 6 oz cooked",
      "Carb: sweet potato, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: broccoli, 1 to 2 cups",
      "Fat/Sauce: garlic herb butter light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "sirloin steak",
      "Carb source": "sweet potato",
      "Fat source": "garlic herb butter light",
      "Vegetable/fiber source": "broccoli",
      "Sauce/flavor source": "garlic herb butter light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Carbs": [
        "Sweet Potato - portioned for the listed macros"
      ],
      "Vegetables": [
        "Broccoli - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Garlic Herb Butter Light - measured lightly"
      ],
      "Sauces & Seasonings": [
        "Garlic Herb Butter Light - measured lightly"
      ],
      "Pantry Staples": [
        "Sirloin Steak - 4 to 6 oz cooked per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-117",
    "title": "Turkey Enchilada Bowl",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 515,
    "protein": 44,
    "carbs": 58,
    "fats": 12,
    "fiber": 10,
    "prepTime": 12,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-117.svg",
    "tags": [
      "30 Minute Meals",
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Ground Turkey - 4 to 6 oz cooked per serving",
      "Rice Beans - portioned for the listed macros",
      "Peppers - 1 to 2 cups per serving",
      "Enchilada Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the ground turkey until fully done and lightly seasoned.",
      "Prepare the rice beans according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peppers based on the recipe style.",
      "Divide the ground turkey, rice beans, and peppers evenly into meal prep containers.",
      "Add the enchilada sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: ground turkey, 4 to 6 oz cooked",
      "Carb: rice beans, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peppers, 1 to 2 cups",
      "Fat/Sauce: enchilada sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "ground turkey",
      "Carb source": "rice beans",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "peppers",
      "Sauce/flavor source": "enchilada sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Ground Turkey - 4 to 6 oz cooked per serving",
        "Rice Beans - portioned for the listed macros"
      ],
      "Carbs": [
        "Rice Beans - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peppers - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Enchilada Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Rice Beans - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-118",
    "title": "Lemon Shrimp Pasta Prep",
    "category": "Dinner Prep",
    "goalType": "High protein",
    "calories": 495,
    "protein": 45,
    "carbs": 52,
    "fats": 9,
    "fiber": 7,
    "prepTime": 15,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-118.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Shrimp - 4 to 6 oz cooked per serving",
      "Protein Pasta - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Lemon Garlic Sauce - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the shrimp until fully done and lightly seasoned.",
      "Prepare the protein pasta according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the shrimp, protein pasta, and spinach evenly into meal prep containers.",
      "Add the lemon garlic sauce in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: shrimp, 4 to 6 oz cooked",
      "Carb: protein pasta, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: lemon garlic sauce, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "shrimp",
      "Carb source": "protein pasta",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "lemon garlic sauce"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Shrimp - 4 to 6 oz cooked per serving",
        "Protein Pasta - portioned for the listed macros"
      ],
      "Carbs": [
        "Protein Pasta - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Lemon Garlic Sauce - measured lightly"
      ],
      "Pantry Staples": [
        "Protein Pasta - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-119",
    "title": "Chicken Sausage Veggie Plate",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 505,
    "protein": 36,
    "carbs": 50,
    "fats": 18,
    "fiber": 7,
    "prepTime": 18,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-119.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Chicken Sausage - 4 to 6 oz cooked per serving",
      "Potatoes - portioned for the listed macros",
      "Peppers Onions Zucchini - 1 to 2 cups per serving",
      "Mustard Herbs - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken sausage until fully done and lightly seasoned.",
      "Prepare the potatoes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the peppers onions zucchini based on the recipe style.",
      "Divide the chicken sausage, potatoes, and peppers onions zucchini evenly into meal prep containers.",
      "Add the mustard herbs in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken sausage, 4 to 6 oz cooked",
      "Carb: potatoes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: peppers onions zucchini, 1 to 2 cups",
      "Fat/Sauce: mustard herbs, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken sausage",
      "Carb source": "potatoes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "peppers onions zucchini",
      "Sauce/flavor source": "mustard herbs"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Sausage - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Potatoes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Peppers Onions Zucchini - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Mustard Herbs - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-120",
    "title": "BBQ Chicken Sweet Potato Bowl",
    "category": "Dinner Prep",
    "goalType": "Dinner Prep",
    "calories": 500,
    "protein": 45,
    "carbs": 58,
    "fats": 10,
    "fiber": 8,
    "prepTime": 20,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-120.svg",
    "tags": [
      "Dinner Prep",
      "High protein"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Sweet Potato - portioned for the listed macros",
      "Corn Slaw - 1 to 2 cups per serving",
      "Bbq Sauce Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the sweet potato according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the corn slaw based on the recipe style.",
      "Divide the chicken breast, sweet potato, and corn slaw evenly into meal prep containers.",
      "Add the BBQ sauce light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: sweet potato, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: corn slaw, 1 to 2 cups",
      "Fat/Sauce: BBQ sauce light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "sweet potato",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "corn slaw",
      "Sauce/flavor source": "BBQ sauce light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "Dinner Prep",
      "High protein"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Sweet Potato - portioned for the listed macros"
      ],
      "Sauces & Seasonings": [
        "Bbq Sauce Light - measured lightly"
      ],
      "Pantry Staples": [
        "Corn Slaw - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-121",
    "title": "Greek Yogurt Berry Box",
    "category": "Snacks & Mini Meals",
    "goalType": "High protein",
    "calories": 280,
    "protein": 27,
    "carbs": 28,
    "fats": 7,
    "fiber": 5,
    "prepTime": 15,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-121.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "PMS / Cycle Support",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Greek Yogurt - 4 to 6 oz cooked per serving",
      "Berries - portioned for the listed macros",
      "Almonds - 1 to 2 cups per serving",
      "Honey Cinnamon - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt until fully done and lightly seasoned.",
      "Prepare the berries according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the almonds based on the recipe style.",
      "Divide the Greek yogurt, berries, and almonds evenly into meal prep containers.",
      "Add the honey cinnamon in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt, 4 to 6 oz cooked",
      "Carb: berries, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: almonds, 1 to 2 cups",
      "Fat/Sauce: honey cinnamon, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt",
      "Carb source": "berries",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "almonds",
      "Sauce/flavor source": "honey cinnamon"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "PMS / Cycle Support",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Fruits": [
        "Berries - portioned for the listed macros"
      ],
      "Fats": [
        "Almonds - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Honey Cinnamon - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Honey Cinnamon - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-122",
    "title": "Turkey Roll Up Snack Box",
    "category": "Snacks & Mini Meals",
    "goalType": "No Reheat",
    "calories": 300,
    "protein": 28,
    "carbs": 30,
    "fats": 8,
    "fiber": 5,
    "prepTime": 15,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-122.svg",
    "tags": [
      "30 Minute Meals",
      "No Reheat",
      "No Reheat Meals",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Turkey Slices - 4 to 6 oz cooked per serving",
      "Whole Grain Crackers - portioned for the listed macros",
      "Cucumber Carrots - 1 to 2 cups per serving",
      "Mustard - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey slices until fully done and lightly seasoned.",
      "Prepare the whole grain crackers according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber carrots based on the recipe style.",
      "Divide the turkey slices, whole grain crackers, and cucumber carrots evenly into meal prep containers.",
      "Add the mustard in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey slices, 4 to 6 oz cooked",
      "Carb: whole grain crackers, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber carrots, 1 to 2 cups",
      "Fat/Sauce: mustard, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey slices",
      "Carb source": "whole grain crackers",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber carrots",
      "Sauce/flavor source": "mustard"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "No Reheat",
      "No Reheat Meals",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Slices - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Grain Crackers - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Mustard - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Whole Grain Crackers - portioned for the listed macros"
      ]
    }
  },
  {
    "id": "meal-123",
    "title": "Protein Fruit Box",
    "category": "Snacks & Mini Meals",
    "goalType": "High protein",
    "calories": 330,
    "protein": 30,
    "carbs": 47,
    "fats": 5,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 10,
    "servings": 4,
    "image": "assets/meals/meal-123.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Whey Shake - 4 to 6 oz cooked per serving",
      "Banana And Berries - portioned for the listed macros",
      "Rice Cake - 1 to 2 cups per serving",
      "Peanut Butter Powder - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the whey shake until fully done and lightly seasoned.",
      "Prepare the banana and berries according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the rice cake based on the recipe style.",
      "Divide the whey shake, banana and berries, and rice cake evenly into meal prep containers.",
      "Add the peanut butter powder in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: whey shake, 4 to 6 oz cooked",
      "Carb: banana and berries, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: rice cake, 1 to 2 cups",
      "Fat/Sauce: peanut butter powder, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "whey shake",
      "Carb source": "banana and berries",
      "Fat source": "peanut butter powder",
      "Vegetable/fiber source": "rice cake",
      "Sauce/flavor source": "peanut butter powder"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Whey Shake - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Banana And Berries - portioned for the listed macros",
        "Rice Cake - 1 to 2 cups per serving"
      ],
      "Fruits": [
        "Banana And Berries - portioned for the listed macros"
      ],
      "Fats": [
        "Peanut Butter Powder - measured lightly"
      ],
      "Pantry Staples": [
        "Rice Cake - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-124",
    "title": "Tuna Cucumber Bites",
    "category": "Snacks & Mini Meals",
    "goalType": "No Reheat",
    "calories": 285,
    "protein": 29,
    "carbs": 25,
    "fats": 8,
    "fiber": 4,
    "prepTime": 10,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-124.svg",
    "tags": [
      "30 Minute Meals",
      "Low carb",
      "No Reheat",
      "No Reheat Meals",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Tuna - 4 to 6 oz cooked per serving",
      "Rice Cakes - portioned for the listed macros",
      "Cucumber - 1 to 2 cups per serving",
      "Sriracha Mayo Light - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the tuna until fully done and lightly seasoned.",
      "Prepare the rice cakes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber based on the recipe style.",
      "Divide the tuna, rice cakes, and cucumber evenly into meal prep containers.",
      "Add the sriracha mayo light in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: tuna, 4 to 6 oz cooked",
      "Carb: rice cakes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber, 1 to 2 cups",
      "Fat/Sauce: sriracha mayo light, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "tuna",
      "Carb source": "rice cakes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber",
      "Sauce/flavor source": "sriracha mayo light"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Low carb",
      "No Reheat",
      "No Reheat Meals",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Tuna - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice Cakes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Rice Cakes - portioned for the listed macros",
        "Sriracha Mayo Light - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Rice Cakes - portioned for the listed macros"
      ]
    }
  },
  {
    "id": "meal-125",
    "title": "Egg and Fruit Box",
    "category": "Snacks & Mini Meals",
    "goalType": "Snack",
    "calories": 310,
    "protein": 19,
    "carbs": 32,
    "fats": 13,
    "fiber": 6,
    "prepTime": 18,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-125.svg",
    "tags": [
      "30 Minute Meals",
      "Snack",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Boiled Eggs - 4 to 6 oz cooked per serving",
      "Apple - portioned for the listed macros",
      "Carrots - 1 to 2 cups per serving",
      "Everything Seasoning - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the boiled eggs until fully done and lightly seasoned.",
      "Prepare the apple according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the carrots based on the recipe style.",
      "Divide the boiled eggs, apple, and carrots evenly into meal prep containers.",
      "Add the everything seasoning in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: boiled eggs, 4 to 6 oz cooked",
      "Carb: apple, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: carrots, 1 to 2 cups",
      "Fat/Sauce: everything seasoning, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "boiled eggs",
      "Carb source": "apple",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "carrots",
      "Sauce/flavor source": "everything seasoning"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Snack",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Boiled Eggs - 4 to 6 oz cooked per serving"
      ],
      "Vegetables": [
        "Carrots - 1 to 2 cups per serving"
      ],
      "Fruits": [
        "Apple - portioned for the listed macros"
      ],
      "Pantry Staples": [
        "Everything Seasoning - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-126",
    "title": "Cottage Cheese Avocado Bowl",
    "category": "Snacks & Mini Meals",
    "goalType": "High protein",
    "calories": 360,
    "protein": 30,
    "carbs": 34,
    "fats": 13,
    "fiber": 6,
    "prepTime": 15,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-126.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Cottage Cheese - 4 to 6 oz cooked per serving",
      "Whole Grain Toast - portioned for the listed macros",
      "Tomatoes - 1 to 2 cups per serving",
      "Avocado - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the cottage cheese until fully done and lightly seasoned.",
      "Prepare the whole grain toast according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the tomatoes based on the recipe style.",
      "Divide the cottage cheese, whole grain toast, and tomatoes evenly into meal prep containers.",
      "Add the avocado in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: cottage cheese, 4 to 6 oz cooked",
      "Carb: whole grain toast, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: tomatoes, 1 to 2 cups",
      "Fat/Sauce: avocado, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "cottage cheese",
      "Carb source": "whole grain toast",
      "Fat source": "avocado",
      "Vegetable/fiber source": "tomatoes",
      "Sauce/flavor source": "avocado"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Cottage Cheese - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Whole Grain Toast - portioned for the listed macros"
      ],
      "Vegetables": [
        "Tomatoes - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Avocado - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Cottage Cheese - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Tomatoes - 1 to 2 cups per serving",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-127",
    "title": "Apple Peanut Butter Protein Box",
    "category": "Snacks & Mini Meals",
    "goalType": "Snack",
    "calories": 340,
    "protein": 25,
    "carbs": 38,
    "fats": 12,
    "fiber": 7,
    "prepTime": 18,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-127.svg",
    "tags": [
      "30 Minute Meals",
      "Snack",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Greek Yogurt - 4 to 6 oz cooked per serving",
      "Apple - portioned for the listed macros",
      "Celery - 1 to 2 cups per serving",
      "Peanut Butter - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt until fully done and lightly seasoned.",
      "Prepare the apple according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the celery based on the recipe style.",
      "Divide the Greek yogurt, apple, and celery evenly into meal prep containers.",
      "Add the peanut butter in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt, 4 to 6 oz cooked",
      "Carb: apple, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: celery, 1 to 2 cups",
      "Fat/Sauce: peanut butter, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt",
      "Carb source": "apple",
      "Fat source": "peanut butter",
      "Vegetable/fiber source": "celery",
      "Sauce/flavor source": "peanut butter"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Snack",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Vegetables": [
        "Celery - 1 to 2 cups per serving"
      ],
      "Fruits": [
        "Apple - portioned for the listed macros"
      ],
      "Fats": [
        "Peanut Butter - measured lightly"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-128",
    "title": "Chicken Hummus Snack Plate",
    "category": "Snacks & Mini Meals",
    "goalType": "High protein",
    "calories": 360,
    "protein": 32,
    "carbs": 35,
    "fats": 11,
    "fiber": 6,
    "prepTime": 18,
    "cookTime": 15,
    "servings": 4,
    "image": "assets/meals/meal-128.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Pita Chips - portioned for the listed macros",
      "Cucumber Peppers - 1 to 2 cups per serving",
      "Hummus - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the pita chips according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber peppers based on the recipe style.",
      "Divide the chicken breast, pita chips, and cucumber peppers evenly into meal prep containers.",
      "Add the hummus in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: pita chips, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber peppers, 1 to 2 cups",
      "Fat/Sauce: hummus, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "pita chips",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber peppers",
      "Sauce/flavor source": "hummus"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Pita Chips - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber Peppers - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Hummus - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Pita Chips - portioned for the listed macros"
      ]
    }
  },
  {
    "id": "meal-129",
    "title": "Edamame Snack Box",
    "category": "Snacks & Mini Meals",
    "goalType": "Plant based",
    "calories": 310,
    "protein": 20,
    "carbs": 34,
    "fats": 10,
    "fiber": 8,
    "prepTime": 20,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-129.svg",
    "tags": [
      "30 Minute Meals",
      "Plant based",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Edamame - 4 to 6 oz cooked per serving",
      "Rice Crackers - portioned for the listed macros",
      "Carrots - 1 to 2 cups per serving",
      "Soy Ginger Dip - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the edamame until fully done and lightly seasoned.",
      "Prepare the rice crackers according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the carrots based on the recipe style.",
      "Divide the edamame, rice crackers, and carrots evenly into meal prep containers.",
      "Add the soy ginger dip in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: edamame, 4 to 6 oz cooked",
      "Carb: rice crackers, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: carrots, 1 to 2 cups",
      "Fat/Sauce: soy ginger dip, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "edamame",
      "Carb source": "rice crackers",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "carrots",
      "Sauce/flavor source": "soy ginger dip"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Plant based",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Edamame - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Rice Crackers - portioned for the listed macros"
      ],
      "Vegetables": [
        "Carrots - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Soy Ginger Dip - measured lightly"
      ],
      "Pantry Staples": [
        "Rice Crackers - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Rice Crackers - portioned for the listed macros"
      ]
    }
  },
  {
    "id": "meal-130",
    "title": "Protein Smoothie Freezer Pack",
    "category": "Snacks & Mini Meals",
    "goalType": "30 Minute Meals",
    "calories": 300,
    "protein": 28,
    "carbs": 42,
    "fats": 4,
    "fiber": 7,
    "prepTime": 12,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-130.svg",
    "tags": [
      "30 Minute Meals",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Protein Powder - 4 to 6 oz cooked per serving",
      "Banana Berries - portioned for the listed macros",
      "Spinach - 1 to 2 cups per serving",
      "Almond Milk - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the protein powder until fully done and lightly seasoned.",
      "Prepare the banana berries according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the spinach based on the recipe style.",
      "Divide the protein powder, banana berries, and spinach evenly into meal prep containers.",
      "Add the almond milk in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: protein powder, 4 to 6 oz cooked",
      "Carb: banana berries, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: spinach, 1 to 2 cups",
      "Fat/Sauce: almond milk, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "protein powder",
      "Carb source": "banana berries",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "spinach",
      "Sauce/flavor source": "almond milk"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Protein Powder - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Banana Berries - portioned for the listed macros"
      ],
      "Vegetables": [
        "Spinach - 1 to 2 cups per serving"
      ],
      "Fruits": [
        "Banana Berries - portioned for the listed macros"
      ],
      "Dairy & Alternatives": [
        "Almond Milk - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Protein Powder - 4 to 6 oz cooked per serving"
      ]
    }
  },
  {
    "id": "meal-131",
    "title": "Salmon Rice Cake Snack",
    "category": "Snacks & Mini Meals",
    "goalType": "No Reheat",
    "calories": 295,
    "protein": 25,
    "carbs": 30,
    "fats": 8,
    "fiber": 3,
    "prepTime": 20,
    "cookTime": 20,
    "servings": 4,
    "image": "assets/meals/meal-131.svg",
    "tags": [
      "30 Minute Meals",
      "No Reheat",
      "No Reheat Meals",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Smoked Salmon - 4 to 6 oz cooked per serving",
      "Rice Cakes - portioned for the listed macros",
      "Cucumber - 1 to 2 cups per serving",
      "Dill Yogurt - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the smoked salmon until fully done and lightly seasoned.",
      "Prepare the rice cakes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the cucumber based on the recipe style.",
      "Divide the smoked salmon, rice cakes, and cucumber evenly into meal prep containers.",
      "Add the dill yogurt in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: smoked salmon, 4 to 6 oz cooked",
      "Carb: rice cakes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: cucumber, 1 to 2 cups",
      "Fat/Sauce: dill yogurt, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "smoked salmon",
      "Carb source": "rice cakes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "cucumber",
      "Sauce/flavor source": "dill yogurt"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "No Reheat",
      "No Reheat Meals",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Smoked Salmon - 4 to 6 oz cooked per serving",
        "Dill Yogurt - measured lightly"
      ],
      "Carbs": [
        "Rice Cakes - portioned for the listed macros"
      ],
      "Vegetables": [
        "Cucumber - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Smoked Salmon - 4 to 6 oz cooked per serving"
      ],
      "Sauces & Seasonings": [
        "Dill Yogurt - measured lightly"
      ],
      "Pantry Staples": [
        "Rice Cakes - portioned for the listed macros",
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Rice Cakes - portioned for the listed macros"
      ]
    }
  },
  {
    "id": "meal-132",
    "title": "Turkey Egg Mini Box",
    "category": "Snacks & Mini Meals",
    "goalType": "Snack",
    "calories": 320,
    "protein": 30,
    "carbs": 28,
    "fats": 10,
    "fiber": 4,
    "prepTime": 12,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-132.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "PMS / Cycle Support",
      "Snack",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Turkey Slices And Egg - 4 to 6 oz cooked per serving",
      "Grapes - portioned for the listed macros",
      "Snap Peas - 1 to 2 cups per serving",
      "Mustard - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the turkey slices and egg until fully done and lightly seasoned.",
      "Prepare the grapes according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the snap peas based on the recipe style.",
      "Divide the turkey slices and egg, grapes, and snap peas evenly into meal prep containers.",
      "Add the mustard in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: turkey slices and egg, 4 to 6 oz cooked",
      "Carb: grapes, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: snap peas, 1 to 2 cups",
      "Fat/Sauce: mustard, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "turkey slices and egg",
      "Carb source": "grapes",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "snap peas",
      "Sauce/flavor source": "mustard"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "PMS / Cycle Support",
      "Snack",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Turkey Slices And Egg - 4 to 6 oz cooked per serving"
      ],
      "Vegetables": [
        "Snap Peas - 1 to 2 cups per serving"
      ],
      "Fruits": [
        "Grapes - portioned for the listed macros"
      ],
      "Sauces & Seasonings": [
        "Mustard - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-133",
    "title": "Chickpea Crunch Box",
    "category": "Snacks & Mini Meals",
    "goalType": "Plant based",
    "calories": 350,
    "protein": 16,
    "carbs": 48,
    "fats": 11,
    "fiber": 10,
    "prepTime": 18,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-133.svg",
    "tags": [
      "30 Minute Meals",
      "Plant based",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Roasted Chickpeas - 4 to 6 oz cooked per serving",
      "Whole Grain Crackers - portioned for the listed macros",
      "Carrots Celery - 1 to 2 cups per serving",
      "Hummus - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the roasted chickpeas until fully done and lightly seasoned.",
      "Prepare the whole grain crackers according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the carrots celery based on the recipe style.",
      "Divide the roasted chickpeas, whole grain crackers, and carrots celery evenly into meal prep containers.",
      "Add the hummus in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: roasted chickpeas, 4 to 6 oz cooked",
      "Carb: whole grain crackers, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: carrots celery, 1 to 2 cups",
      "Fat/Sauce: hummus, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "roasted chickpeas",
      "Carb source": "whole grain crackers",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "carrots celery",
      "Sauce/flavor source": "hummus"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "Plant based",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Carbs": [
        "Whole Grain Crackers - portioned for the listed macros"
      ],
      "Vegetables": [
        "Carrots Celery - 1 to 2 cups per serving"
      ],
      "Pantry Staples": [
        "Roasted Chickpeas - 4 to 6 oz cooked per serving",
        "Hummus - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ],
      "Snacks": [
        "Whole Grain Crackers - portioned for the listed macros"
      ]
    }
  },
  {
    "id": "meal-134",
    "title": "Mini Chicken Taco Cups",
    "category": "Snacks & Mini Meals",
    "goalType": "Snack",
    "calories": 335,
    "protein": 31,
    "carbs": 34,
    "fats": 8,
    "fiber": 5,
    "prepTime": 20,
    "cookTime": 25,
    "servings": 4,
    "image": "assets/meals/meal-134.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Snack",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Chicken Breast - 4 to 6 oz cooked per serving",
      "Mini Tortillas - portioned for the listed macros",
      "Lettuce Tomato - 1 to 2 cups per serving",
      "Salsa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the chicken breast until fully done and lightly seasoned.",
      "Prepare the mini tortillas according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the lettuce tomato based on the recipe style.",
      "Divide the chicken breast, mini tortillas, and lettuce tomato evenly into meal prep containers.",
      "Add the salsa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: chicken breast, 4 to 6 oz cooked",
      "Carb: mini tortillas, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: lettuce tomato, 1 to 2 cups",
      "Fat/Sauce: salsa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "chicken breast",
      "Carb source": "mini tortillas",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "lettuce tomato",
      "Sauce/flavor source": "salsa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Snack",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Chicken Breast - 4 to 6 oz cooked per serving"
      ],
      "Carbs": [
        "Mini Tortillas - portioned for the listed macros"
      ],
      "Vegetables": [
        "Lettuce Tomato - 1 to 2 cups per serving"
      ],
      "Sauces & Seasonings": [
        "Salsa - measured lightly"
      ],
      "Pantry Staples": [
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  },
  {
    "id": "meal-135",
    "title": "Chocolate Protein Chia Cup",
    "category": "Snacks & Mini Meals",
    "goalType": "High protein",
    "calories": 325,
    "protein": 32,
    "carbs": 28,
    "fats": 11,
    "fiber": 10,
    "prepTime": 20,
    "cookTime": 30,
    "servings": 4,
    "image": "assets/meals/meal-135.svg",
    "tags": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "ingredients": [
      "Greek Yogurt And Whey - 4 to 6 oz cooked per serving",
      "Chia - portioned for the listed macros",
      "Berries - 1 to 2 cups per serving",
      "Cocoa - measured lightly",
      "Sea salt, black pepper, and preferred seasoning blend"
    ],
    "instructions": [
      "Cook the Greek yogurt and whey until fully done and lightly seasoned.",
      "Prepare the chia according to package or standard cooking directions.",
      "Wash, chop, and cook or portion the berries based on the recipe style.",
      "Divide the Greek yogurt and whey, chia, and berries evenly into meal prep containers.",
      "Add the cocoa in a small container or drizzle lightly before serving."
    ],
    "portionBreakdown": [
      "Protein: Greek yogurt and whey, 4 to 6 oz cooked",
      "Carb: chia, about 1/2 to 1 cup cooked depending on goal",
      "Vegetable/Fiber: berries, 1 to 2 cups",
      "Fat/Sauce: cocoa, measured to keep calories controlled"
    ],
    "components": {
      "Protein source": "Greek yogurt and whey",
      "Carb source": "chia",
      "Fat source": "Measured oil or natural fats from protein",
      "Vegetable/fiber source": "berries",
      "Sauce/flavor source": "cocoa"
    },
    "storage": "Store in airtight containers in the refrigerator for up to 3 to 4 days. Freeze extra portions if preparing beyond 4 days.",
    "reheating": "Reheat covered in the microwave for 60 to 120 seconds, adding a splash of water if the rice, pasta, or potatoes feel dry. Keep cold toppings and sauces separate when possible.",
    "bestUsedFor": [
      "30 Minute Meals",
      "High protein",
      "Low carb",
      "Snacks & Mini Meals",
      "Weight loss"
    ],
    "grocery": {
      "Proteins": [
        "Greek Yogurt And Whey - 4 to 6 oz cooked per serving"
      ],
      "Fruits": [
        "Berries - 1 to 2 cups per serving"
      ],
      "Fats": [
        "Chia - portioned for the listed macros"
      ],
      "Dairy & Alternatives": [
        "Greek Yogurt And Whey - 4 to 6 oz cooked per serving"
      ],
      "Pantry Staples": [
        "Cocoa - measured lightly",
        "Sea salt, black pepper, and preferred seasoning blend"
      ]
    }
  }
];

window.DESTINY_MASTER_GROCERY = {
  "Proteins": [
    "Chicken breast",
    "Chicken thigh",
    "Ground turkey",
    "Turkey slices",
    "Turkey sausage",
    "Lean beef",
    "Sirloin steak",
    "Salmon",
    "Shrimp",
    "Tuna",
    "Cod",
    "Eggs",
    "Egg whites",
    "Greek yogurt",
    "Cottage cheese",
    "Tofu",
    "Tempeh",
    "Lentils",
    "Black beans",
    "Chickpeas",
    "Edamame",
    "Protein powder"
  ],
  "Carbs": [
    "Jasmine rice",
    "Brown rice",
    "White rice",
    "Sweet potatoes",
    "Potatoes",
    "Rolled oats",
    "Quinoa",
    "Whole wheat pasta",
    "Protein pasta",
    "Whole wheat wraps",
    "Pita",
    "Granola",
    "Rice noodles",
    "Soba noodles",
    "Farro",
    "Orzo",
    "Rice cakes",
    "Whole grain crackers"
  ],
  "Vegetables": [
    "Broccoli",
    "Green beans",
    "Spinach",
    "Zucchini",
    "Bell peppers",
    "Asparagus",
    "Romaine",
    "Lettuce",
    "Cucumber",
    "Carrots",
    "Cabbage",
    "Celery",
    "Tomatoes",
    "Corn",
    "Snap peas",
    "Kale",
    "Mushrooms"
  ],
  "Fruits": [
    "Berries",
    "Bananas",
    "Apples",
    "Pineapple",
    "Grapes",
    "Strawberries"
  ],
  "Fats": [
    "Avocado",
    "Olive oil",
    "Almonds",
    "Peanut butter",
    "Chia seeds",
    "Flaxseed",
    "Tahini",
    "Light pesto",
    "Seeds"
  ],
  "Sauces & Seasonings": [
    "Salsa",
    "Hot sauce",
    "Buffalo sauce",
    "Light teriyaki",
    "Low sodium soy sauce",
    "Tamari",
    "Lemon",
    "Lime",
    "Garlic",
    "Ginger",
    "Cinnamon",
    "Mustard",
    "Marinara",
    "BBQ sauce light",
    "Chili spices",
    "Curry powder",
    "Dill",
    "Herbs"
  ],
  "Dairy & Alternatives": [
    "Greek yogurt",
    "Cottage cheese",
    "Feta",
    "Light mozzarella",
    "Ricotta light",
    "Almond milk"
  ],
  "Pantry Staples": [
    "Beans",
    "Lentils",
    "Chickpeas",
    "Canned tomatoes",
    "Honey",
    "Maple syrup",
    "Sea salt",
    "Black pepper",
    "Cooking spray"
  ],
  "Snacks": [
    "Rice cakes",
    "Whole grain crackers",
    "Pita chips",
    "Fruit",
    "Protein powder",
    "Hummus"
  ]
};

window.DESTINY_WEEKLY_MENUS = [
  {
    "id": "weight-loss-week",
    "name": "Weight Loss Week",
    "goal": "Weight loss",
    "averageCalories": 1550,
    "averageProtein": 145,
    "days": {
      "Monday": {
        "Breakfast": "Classic Protein Overnight Oats",
        "Lunch": "Chicken Fajita Bowl",
        "Dinner": "Chicken Caesar Protein Box",
        "Snack": "Garlic Chicken Broccoli Rice"
      },
      "Tuesday": {
        "Breakfast": "Egg White Muffin Cups",
        "Lunch": "Shrimp Zucchini Bowl",
        "Dinner": "Turkey Hummus Wrap Box",
        "Snack": "Turkey Lasagna Bowls"
      },
      "Wednesday": {
        "Breakfast": "Turkey Sausage Breakfast Bowl",
        "Lunch": "Buffalo Chicken Lettuce Wrap Prep",
        "Dinner": "Shrimp Quinoa Lunch Bowl",
        "Snack": "Honey Garlic Salmon Plate"
      },
      "Thursday": {
        "Breakfast": "Greek Yogurt Fruit Jars",
        "Lunch": "Turkey Burger Bowl",
        "Dinner": "Chicken Sushi Bowl",
        "Snack": "Shrimp Taco Rice Plate"
      },
      "Friday": {
        "Breakfast": "Breakfast Burrito Bowls",
        "Lunch": "Chicken Cucumber Feta Box",
        "Dinner": "Beef Taco Salad Prep",
        "Snack": "Chicken Meatball Orzo Prep"
      },
      "Saturday": {
        "Breakfast": "Cottage Cheese Fruit Box",
        "Lunch": "Lemon Herb Chicken Green Bowl",
        "Dinner": "Turkey Pita Protein Box",
        "Snack": "Beef Stir Fry Rice Bowl"
      },
      "Sunday": {
        "Breakfast": "Protein Pancakes Meal Prep",
        "Lunch": "Cajun Shrimp Veggie Plate",
        "Dinner": "Salmon Cucumber Rice Box",
        "Snack": "Turkey Shepherd Bowl"
      }
    }
  },
  {
    "id": "high-protein-week",
    "name": "High Protein Week",
    "goal": "High protein",
    "averageCalories": 1800,
    "averageProtein": 170,
    "days": {
      "Monday": {
        "Breakfast": "Cottage Cheese Fruit Box",
        "Lunch": "Egg White Breakfast Bowl",
        "Dinner": "Turkey Pita Protein Box",
        "Snack": "Beef Stir Fry Rice Bowl"
      },
      "Tuesday": {
        "Breakfast": "Protein Pancakes Meal Prep",
        "Lunch": "Salmon Asparagus Rice Plate",
        "Dinner": "Salmon Cucumber Rice Box",
        "Snack": "Turkey Shepherd Bowl"
      },
      "Wednesday": {
        "Breakfast": "Chia Pudding Jars",
        "Lunch": "Lean Beef Cauliflower Rice Bowl",
        "Dinner": "Chicken Caprese Meal Box",
        "Snack": "Chicken Parmesan Light Prep"
      },
      "Thursday": {
        "Breakfast": "Oatmeal Egg White Bowl",
        "Lunch": "Turkey Zucchini Marinara Bowl",
        "Dinner": "Tuna Pasta Salad Prep",
        "Snack": "Cod Rice Veggie Plate"
      },
      "Friday": {
        "Breakfast": "Smoked Salmon Egg Box",
        "Lunch": "Chicken Shawarma Salad Prep",
        "Dinner": "Buffalo Turkey Rice Bowl",
        "Snack": "Chicken Tikka Rice Bowl"
      },
      "Saturday": {
        "Breakfast": "Apple Cinnamon Protein Oats",
        "Lunch": "Steak Rice Power Bowl",
        "Dinner": "Chicken Cobb Prep Box",
        "Snack": "Steak Sweet Potato Dinner"
      },
      "Sunday": {
        "Breakfast": "Spinach Feta Egg Bake",
        "Lunch": "Salmon Sweet Potato Plate",
        "Dinner": "Mediterranean Tuna Box",
        "Snack": "Turkey Enchilada Bowl"
      }
    }
  },
  {
    "id": "muscle-gain-week",
    "name": "Muscle Gain Week",
    "goal": "Muscle gain",
    "averageCalories": 2300,
    "averageProtein": 185,
    "days": {
      "Monday": {
        "Breakfast": "Chicken Caesar Protein Box",
        "Lunch": "Steak Rice Power Bowl",
        "Dinner": "Garlic Chicken Broccoli Rice",
        "Snack": "Greek Yogurt Berry Box"
      },
      "Tuesday": {
        "Breakfast": "Turkey Hummus Wrap Box",
        "Lunch": "Salmon Sweet Potato Plate",
        "Dinner": "Turkey Lasagna Bowls",
        "Snack": "Turkey Roll Up Snack Box"
      },
      "Wednesday": {
        "Breakfast": "Shrimp Quinoa Lunch Bowl",
        "Lunch": "High Protein Breakfast Burrito",
        "Dinner": "Honey Garlic Salmon Plate",
        "Snack": "Protein Fruit Box"
      },
      "Thursday": {
        "Breakfast": "Chicken Sushi Bowl",
        "Lunch": "Beef and Potato Power Bowl",
        "Dinner": "Shrimp Taco Rice Plate",
        "Snack": "Tuna Cucumber Bites"
      },
      "Friday": {
        "Breakfast": "Beef Taco Salad Prep",
        "Lunch": "Greek Yogurt Parfait Prep",
        "Dinner": "Chicken Meatball Orzo Prep",
        "Snack": "Egg and Fruit Box"
      },
      "Saturday": {
        "Breakfast": "Turkey Pita Protein Box",
        "Lunch": "Turkey Sweet Potato Hash",
        "Dinner": "Beef Stir Fry Rice Bowl",
        "Snack": "Cottage Cheese Avocado Bowl"
      },
      "Sunday": {
        "Breakfast": "Salmon Cucumber Rice Box",
        "Lunch": "Chicken Alfredo Protein Pasta",
        "Dinner": "Turkey Shepherd Bowl",
        "Snack": "Apple Peanut Butter Protein Box"
      }
    }
  },
  {
    "id": "budget-friendly-week",
    "name": "Budget Friendly Week",
    "goal": "Budget friendly",
    "averageCalories": 1700,
    "averageProtein": 140,
    "days": {
      "Monday": {
        "Breakfast": "Garlic Chicken Broccoli Rice",
        "Lunch": "Tuna Rice Bowl",
        "Dinner": "Greek Yogurt Berry Box",
        "Snack": "Chicken Fajita Bowl"
      },
      "Tuesday": {
        "Breakfast": "Turkey Lasagna Bowls",
        "Lunch": "Ground Turkey Pasta",
        "Dinner": "Turkey Roll Up Snack Box",
        "Snack": "Turkey Taco Bowl"
      },
      "Wednesday": {
        "Breakfast": "Honey Garlic Salmon Plate",
        "Lunch": "Bean and Rice Burrito Bowl",
        "Dinner": "Protein Fruit Box",
        "Snack": "Shrimp Zucchini Bowl"
      },
      "Thursday": {
        "Breakfast": "Shrimp Taco Rice Plate",
        "Lunch": "Oats and Banana Protein Jar",
        "Dinner": "Tuna Cucumber Bites",
        "Snack": "Greek Chicken Salad Box"
      },
      "Friday": {
        "Breakfast": "Chicken Meatball Orzo Prep",
        "Lunch": "Rotisserie Chicken Meal Prep",
        "Dinner": "Egg and Fruit Box",
        "Snack": "Buffalo Chicken Lettuce Wrap Prep"
      },
      "Saturday": {
        "Breakfast": "Beef Stir Fry Rice Bowl",
        "Lunch": "Chicken Egg Fried Rice Light",
        "Dinner": "Cottage Cheese Avocado Bowl",
        "Snack": "Egg White Breakfast Bowl"
      },
      "Sunday": {
        "Breakfast": "Turkey Shepherd Bowl",
        "Lunch": "Turkey Cabbage Skillet",
        "Dinner": "Apple Peanut Butter Protein Box",
        "Snack": "Turkey Burger Bowl"
      }
    }
  },
  {
    "id": "low-carb-week",
    "name": "Low Carb Week",
    "goal": "Low carb",
    "averageCalories": 1500,
    "averageProtein": 150,
    "days": {
      "Monday": {
        "Breakfast": "Greek Yogurt Berry Box",
        "Lunch": "Chicken Rice and Carrots",
        "Dinner": "Chicken Fajita Bowl",
        "Snack": "Steak Rice Power Bowl"
      },
      "Tuesday": {
        "Breakfast": "Turkey Roll Up Snack Box",
        "Lunch": "Turkey Lettuce Cups",
        "Dinner": "Turkey Taco Bowl",
        "Snack": "Chicken Pesto Pasta Prep"
      },
      "Wednesday": {
        "Breakfast": "Protein Fruit Box",
        "Lunch": "Shrimp Cucumber Rice Bowl",
        "Dinner": "Shrimp Zucchini Bowl",
        "Snack": "Salmon Sweet Potato Plate"
      },
      "Thursday": {
        "Breakfast": "Tuna Cucumber Bites",
        "Lunch": "Tofu Rice Veggie Bowl",
        "Dinner": "Greek Chicken Salad Box",
        "Snack": "Turkey Meatball Pasta"
      },
      "Friday": {
        "Breakfast": "Egg and Fruit Box",
        "Lunch": "Lean Beef Zucchini Bowl",
        "Dinner": "Buffalo Chicken Lettuce Wrap Prep",
        "Snack": "High Protein Breakfast Burrito"
      },
      "Saturday": {
        "Breakfast": "Cottage Cheese Avocado Bowl",
        "Lunch": "Chicken Coconut Curry Rice",
        "Dinner": "Egg White Breakfast Bowl",
        "Snack": "Chicken Teriyaki Rice Bowl"
      },
      "Sunday": {
        "Breakfast": "Apple Peanut Butter Protein Box",
        "Lunch": "Turkey Rice Soup Prep",
        "Dinner": "Turkey Burger Bowl",
        "Snack": "Beef and Potato Power Bowl"
      }
    }
  },
  {
    "id": "busy-girl-week",
    "name": "Busy Girl 30-Minute Week",
    "goal": "Busy week prep",
    "averageCalories": 1650,
    "averageProtein": 145,
    "days": {
      "Monday": {
        "Breakfast": "Chicken Fajita Bowl",
        "Lunch": "Tofu Teriyaki Bowl",
        "Dinner": "Steak Rice Power Bowl",
        "Snack": "Tuna Rice Bowl"
      },
      "Tuesday": {
        "Breakfast": "Turkey Taco Bowl",
        "Lunch": "Chickpea Quinoa Salad",
        "Dinner": "Chicken Pesto Pasta Prep",
        "Snack": "Egg and Potato Breakfast Box"
      },
      "Wednesday": {
        "Breakfast": "Shrimp Zucchini Bowl",
        "Lunch": "Tempeh Rice Plate",
        "Dinner": "Salmon Sweet Potato Plate",
        "Snack": "Ground Turkey Pasta"
      },
      "Thursday": {
        "Breakfast": "Greek Chicken Salad Box",
        "Lunch": "Vegan Overnight Oats",
        "Dinner": "Turkey Meatball Pasta",
        "Snack": "Chicken Thigh Rice Plate"
      },
      "Friday": {
        "Breakfast": "Buffalo Chicken Lettuce Wrap Prep",
        "Lunch": "Vegan Chili",
        "Dinner": "High Protein Breakfast Burrito",
        "Snack": "Bean and Rice Burrito Bowl"
      },
      "Saturday": {
        "Breakfast": "Egg White Breakfast Bowl",
        "Lunch": "Crispy Tofu Quinoa Bowl",
        "Dinner": "Chicken Teriyaki Rice Bowl",
        "Snack": "Cottage Cheese Snack Box"
      },
      "Sunday": {
        "Breakfast": "Turkey Burger Bowl",
        "Lunch": "Vegan Taco Lentil Bowl",
        "Dinner": "Beef and Potato Power Bowl",
        "Snack": "Oats and Banana Protein Jar"
      }
    }
  },
  {
    "id": "plant-based-week",
    "name": "Plant Based Week",
    "goal": "Plant based",
    "averageCalories": 1850,
    "averageProtein": 125,
    "days": {
      "Monday": {
        "Breakfast": "Egg White Breakfast Bowl",
        "Lunch": "Black Bean Sweet Potato Bowl",
        "Dinner": "Chicken Teriyaki Rice Bowl",
        "Snack": "Cottage Cheese Snack Box"
      },
      "Tuesday": {
        "Breakfast": "Turkey Burger Bowl",
        "Lunch": "Edamame Noodle Bowl",
        "Dinner": "Beef and Potato Power Bowl",
        "Snack": "Oats and Banana Protein Jar"
      },
      "Wednesday": {
        "Breakfast": "Salmon Asparagus Rice Plate",
        "Lunch": "Hummus Veggie Snack Box",
        "Dinner": "Protein Overnight Oats",
        "Snack": "Turkey Chili"
      },
      "Thursday": {
        "Breakfast": "Chicken Cucumber Feta Box",
        "Lunch": "Chickpea Pasta Marinara",
        "Dinner": "Greek Yogurt Parfait Prep",
        "Snack": "Rotisserie Chicken Meal Prep"
      },
      "Friday": {
        "Breakfast": "Lean Beef Cauliflower Rice Bowl",
        "Lunch": "Peanut Tofu Noodle Prep",
        "Dinner": "Chicken Avocado Rice Bowl",
        "Snack": "Lentil Bowl"
      },
      "Saturday": {
        "Breakfast": "Lemon Herb Chicken Green Bowl",
        "Lunch": "Classic Protein Overnight Oats",
        "Dinner": "Turkey Sweet Potato Hash",
        "Snack": "Chicken Egg Fried Rice Light"
      },
      "Sunday": {
        "Breakfast": "Turkey Zucchini Marinara Bowl",
        "Lunch": "Turkey Sausage Breakfast Bowl",
        "Dinner": "Shrimp Noodle Performance Bowl",
        "Snack": "Sardine Potato Plate"
      }
    }
  },
  {
    "id": "dairy-free-week",
    "name": "Dairy Free Week",
    "goal": "Dairy free",
    "averageCalories": 1700,
    "averageProtein": 145,
    "days": {
      "Monday": {
        "Breakfast": "Greek Yogurt Berry Box",
        "Lunch": "Chicken Rice and Carrots",
        "Dinner": "Chicken Fajita Bowl",
        "Snack": "Steak Rice Power Bowl"
      },
      "Tuesday": {
        "Breakfast": "Turkey Roll Up Snack Box",
        "Lunch": "Turkey Lettuce Cups",
        "Dinner": "Turkey Taco Bowl",
        "Snack": "Chicken Pesto Pasta Prep"
      },
      "Wednesday": {
        "Breakfast": "Protein Fruit Box",
        "Lunch": "Shrimp Cucumber Rice Bowl",
        "Dinner": "Shrimp Zucchini Bowl",
        "Snack": "Salmon Sweet Potato Plate"
      },
      "Thursday": {
        "Breakfast": "Tuna Cucumber Bites",
        "Lunch": "Tofu Rice Veggie Bowl",
        "Dinner": "Greek Chicken Salad Box",
        "Snack": "Turkey Meatball Pasta"
      },
      "Friday": {
        "Breakfast": "Egg and Fruit Box",
        "Lunch": "Lean Beef Zucchini Bowl",
        "Dinner": "Buffalo Chicken Lettuce Wrap Prep",
        "Snack": "High Protein Breakfast Burrito"
      },
      "Saturday": {
        "Breakfast": "Cottage Cheese Avocado Bowl",
        "Lunch": "Chicken Coconut Curry Rice",
        "Dinner": "Egg White Breakfast Bowl",
        "Snack": "Chicken Teriyaki Rice Bowl"
      },
      "Sunday": {
        "Breakfast": "Apple Peanut Butter Protein Box",
        "Lunch": "Turkey Rice Soup Prep",
        "Dinner": "Turkey Burger Bowl",
        "Snack": "Beef and Potato Power Bowl"
      }
    }
  }
];
