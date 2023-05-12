interface mealProps {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
  difficulty: string;
  time: number;
}

interface FoodContextProps {
  foodData: mealProps[];
  favouriteFoodData: mealProps[];
  updateFoodData: (data: mealProps[]) => void;
  updateFavouriteFoodData: (data: mealProps[]) => void;
  timeArr: number[];
  diffArr: string[];
}

export type { mealProps, FoodContextProps };
