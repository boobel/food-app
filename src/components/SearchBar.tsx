import React, { useState, useContext } from "react";
import styled from "styled-components";
import { getFood } from "../api/getMeals";
import { FoodContext } from "../context/FoodContext";

const SearchBar: React.FC = () => {
  const { updateFoodData } = useContext(FoodContext);
  const [inputText, setInputText] = useState("");

  const handleChange = (event: { target: { value: string } }) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = async (event: { key: string }) => {
    if (event.key === "Enter") {
      try {
        const response = await getFood(inputText);
        updateFoodData(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <StyledSearchBar>
      <StyledInput
        type="text"
        placeholder="Search for a recipe"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const StyledInput = styled.input`
  padding: 1rem;
  border: none;
  background-color: #ffffff;
  color: #d4d1ce;
`;

export { SearchBar };
