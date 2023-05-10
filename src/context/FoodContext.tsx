import React, { createContext, useState, useEffect, ReactNode } from "react";
import { mealProps } from "../interfaces/props";

type FoodContextType = {
  foodData: mealProps[];
  favouriteFoodData: mealProps[];
  updateFoodData: (data: mealProps[]) => void;
  updateFavouriteFoodData: (data: mealProps[]) => void;
};

const FoodContext = createContext<FoodContextType>({
  foodData: [],
  favouriteFoodData: [],
  updateFoodData: () => {},
  updateFavouriteFoodData: () => {},
});

type FoodContextProviderProps = {
  children: ReactNode;
};

const FoodContextProvider = ({ children }: FoodContextProviderProps) => {
  const [foodData, setFoodData] = useState<mealProps[]>([]);
  const [favouriteFoodData, setFavouriteFoodData] = useState<mealProps[]>([]);

  const updateFoodData = (data: mealProps[]) => {
    setFoodData(data);
  };

  const updateFavouriteFoodData = (data: mealProps[]) => {
    setFavouriteFoodData(data);
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
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodContextProvider };
