import React, { useEffect, useState, useContext } from "react";
import { mealProps } from "../interfaces/props";
import { FoodContext } from "../context/FoodContext";
import styled from "styled-components";

const FavouriteMealCard: React.FC<mealProps> = ({
  title,
  ingredients,
  instructions,
  servings,
}) => {
  const [ingredientsArr, setIngredientsArr] = useState<string[]>([]);
  const timeArr = [10, 15, 25, 30, 35, 40, 45, 60, 75, 90];
  const diffArr = ["easy", "intermediate", "hard"];
  const { foodData, favouriteFoodData, updateFavouriteFoodData } =
    useContext(FoodContext);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const handleDelete = () => {
    const updatedFavouriteFoodData = favouriteFoodData.filter(
      (meal) => meal.title !== title
    );
    updateFavouriteFoodData(updatedFavouriteFoodData);
  };

  useEffect(() => {
    setIngredientsArr(ingredients.split("|"));
  }, [ingredients]);

  return (
    <StyledCard>
      <StyledCloseButton
        onClick={() => {
          handleDelete();
        }}
      >
        &times;
      </StyledCloseButton>
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
    </StyledCard>
  );
};

const StyledCard = styled.article`
  position: relative;
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

const StyledCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
`;

export { FavouriteMealCard };
