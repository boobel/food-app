import React, { useEffect, useState } from "react";
import { mealProps } from "../interfaces/props";
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

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    setIngredientsArr(ingredients.split("|"));
  }, [ingredients]);

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
      <StyledButton>Add To Favourites</StyledButton>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 40%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ebd5c2;
`;

const StyledButton = styled.button`
  width: fit-content;
  margin: 0 auto;
  background-color: #b99393;
  color: #ebd5c2;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const StyledTitle = styled.h3`
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
