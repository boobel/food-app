import React, { useEffect, useState, useContext } from "react";
import { mealProps } from "../interfaces/props";
import { FoodContext } from "../context/FoodContext";
import styled from "styled-components";

const MealCard: React.FC<mealProps> = ({
  title,
  ingredients,
  instructions,
  servings,
}) => {
  const [ingredientsArr, setIngredientsArr] = useState<string[]>([]);
  const timeArr = [10, 15, 25, 30, 35, 40, 45, 60, 75, 90];
  const diffArr = ["easy", "intermidiate", "hard"];
  const { foodData, favouriteFoodData, updateFavouriteFoodData } =
    useContext(FoodContext);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    setIngredientsArr(ingredients.split("|"));
  }, [ingredients]);

  const handleClick = () => {
    const currentFood = foodData.find((food) => food.title === title);

    if (
      currentFood &&
      !favouriteFoodData.some((food) => food.title === title)
    ) {
      updateFavouriteFoodData([...favouriteFoodData, currentFood]);
    } else {
      alert("This recipe is already in your favourites");
    }
  };

  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledSection>
        <StyledServings>{servings}</StyledServings>
        <span>Time: {timeArr[getRandomInt(timeArr.length)]} min.</span>
        <span>Difficulty: {diffArr[getRandomInt(diffArr.length)]}</span>
      </StyledSection>
      <StyledIngridients>
        {ingredientsArr.map((item) => {
          return <li>{item}</li>;
        })}
      </StyledIngridients>
      <StyledInstructions>{instructions}</StyledInstructions>
      <StyledButton
        onClick={() => {
          handleClick();
        }}
      >
        Add To Favourites
      </StyledButton>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 40%;
  min-width: 700px;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 25px 25px black;
`;

const StyledButton = styled.button`
  width: fit-content;
  margin: 0 auto;
  background-color: white;
  box-shadow: 5px 5px black;
  padding: 0.5rem;
  transition: all 0.3s ease-in;
  &:hover {
    border: solid 2px grey;
    box-shadow: 5px 5px grey;
  }
  &:active {
    transform: translateY(4px);
    transition-duration: 0.05s;
  }
`;

const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledInstructions = styled.span``;

const StyledServings = styled.span``;

const StyledIngridients = styled.ul``;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 75%;
`;

export { MealCard };
