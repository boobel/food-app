import React, { createContext, useState, useEffect, ReactNode } from "react";
import { mealProps, FoodContextProps } from "../interfaces/props";

const FoodContext = createContext<FoodContextProps>({
  foodData: [],
  favouriteFoodData: [],
  updateFoodData: () => {},
  updateFavouriteFoodData: () => {},
  timeArr: [],
  diffArr: [],
});

type FoodContextProviderProps = {
  children: ReactNode;
};

const FoodContextProvider = ({ children }: FoodContextProviderProps) => {
  const [foodData, setFoodData] = useState<mealProps[]>([]);
  const [favouriteFoodData, setFavouriteFoodData] = useState<mealProps[]>([]);
  const timeArr = [10, 15, 25, 30, 35, 40, 45, 60, 75, 90];
  const diffArr = ["easy", "intermediate", "hard"];

  const updateFoodData = (data: mealProps[]) => {
    setFoodData(data);
  };

  const updateFavouriteFoodData = (data: mealProps[]) => {
    const updatedData = data.map((meal) => ({
      ...meal,
      time: timeArr[Math.floor(Math.random() * timeArr.length)],
      difficulty: diffArr[Math.floor(Math.random() * diffArr.length)],
    }));

    setFavouriteFoodData(updatedData);
  };

  useEffect(() => {
    const storedFoodData = localStorage.getItem("foodData");
    if (storedFoodData) {
      setFoodData(JSON.parse(storedFoodData));
    }

    const storedFavouriteFoodData = localStorage.getItem("favouriteFoodData");
    if (storedFavouriteFoodData) {
      setFavouriteFoodData(JSON.parse(storedFavouriteFoodData));
    }

    return () => {
      localStorage.removeItem("foodData");
      localStorage.removeItem("favouriteFoodData");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("foodData", JSON.stringify(foodData));
  }, [foodData]);

  useEffect(() => {
    localStorage.setItem(
      "favouriteFoodData",
      JSON.stringify(favouriteFoodData)
    );
  }, [favouriteFoodData]);

  return (
    <FoodContext.Provider
      value={{
        foodData,
        favouriteFoodData,
        updateFoodData,
        updateFavouriteFoodData,
        timeArr,
        diffArr,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodContextProvider };
