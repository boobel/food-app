import React, { useEffect, useState, useContext } from "react";
import { mealProps } from "../interfaces/props";
import { FoodContext } from "../context/FoodContext";
import styled from "styled-components";

const FavouriteMealCard: React.FC<mealProps> = ({
  title,
  ingredients,
  instructions,
  servings,
  difficulty,
  time,
}) => {
  const [ingredientsArr, setIngredientsArr] = useState<string[]>([]);
  const [editedInstructions, setEditedInstructions] = useState(instructions);
  const [editMode, setEditMode] = useState(false);
  const { favouriteFoodData, updateFavouriteFoodData } =
    useContext(FoodContext);

  const handleDelete = () => {
    const updatedFavouriteFoodData = favouriteFoodData.filter(
      (meal) => meal.title !== title
    );
    updateFavouriteFoodData(updatedFavouriteFoodData);
  };

  const toggleEditMode = () => {
    if (editMode) {
      const updatedFavouriteFoodData = favouriteFoodData.map((meal) => {
        if (meal.title === title) {
          return {
            ...meal,
            instructions: editedInstructions,
            ingredients: ingredientsArr.join("|"),
          };
        }
        return meal;
      });
      updateFavouriteFoodData(updatedFavouriteFoodData);
    }
    setEditMode(!editMode);
  };

  useEffect(() => {
    const initialIngredients = ingredients.split("|");
    setIngredientsArr(initialIngredients);
  }, [ingredients]);

  return (
    <StyledCard>
      <StyledCloseButton onClick={handleDelete}>&times;</StyledCloseButton>
      <StyledTitle>{title}</StyledTitle>
      <StyledSection>
        <StyledServings>{servings}</StyledServings>
        <span>Time: {time} min.</span>
        <span>Difficulty: {difficulty}</span>
      </StyledSection>
      {editMode ? (
        <StyledIngredients>
          {ingredientsArr.map((item, index) => (
            <li key={index}>
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const updatedIngredientsArr = [...ingredientsArr];
                  updatedIngredientsArr[index] = e.target.value;
                  setIngredientsArr(updatedIngredientsArr);
                }}
              />
            </li>
          ))}
        </StyledIngredients>
      ) : (
        <StyledIngredients>
          {ingredientsArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </StyledIngredients>
      )}
      {editMode ? (
        <StyledTextArea
          value={editedInstructions}
          onChange={(e) => setEditedInstructions(e.target.value)}
        />
      ) : (
        <StyledInstructions>{editedInstructions}</StyledInstructions>
      )}

      <StyledEditButton onClick={toggleEditMode}>
        {editMode ? "Save Recipe" : "Edit Recipe"}
      </StyledEditButton>
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

const StyledIngredients = styled.ul``;

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
  cursor: pointer;
`;

const StyledEditButton = styled.button`
  width: 20%;
  margin: 0 auto;
  border: 2px solid black;
  background-color: white;
  box-shadow: 5px 5px black;
  transition: all 0.3s ease-in;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    border: solid 2px grey;
    box-shadow: 5px 5px grey;
  }
  &:active {
    transform: translateY(4px);
    transition-duration: 0.05s;
  }
`;

const StyledTextArea = styled.textarea`
  height: 200px;
`;

export { FavouriteMealCard };
