import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { SearchBar } from "../components/SearchBar";
import { FoodContext } from "../context/FoodContext";
import { MealCard } from "../components/MealCard";
import styled from "styled-components";

const Explore: React.FC = () => {
  const { foodData } = useContext(FoodContext);
  return (
    <>
      <Header />
      <Nav />
      <SearchBar />
      <StyledSection>
        {foodData.map((item) => {
          return (
            <MealCard
              title={item.title}
              ingredients={item.ingredients}
              servings={item.servings}
              instructions={item.instructions}
            />
          );
        })}
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export { Explore };
