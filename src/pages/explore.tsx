import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { SearchBar } from "../components/SearchBar";
import { FoodContext } from "../context/FoodContext";
import { MealCard } from "../components/MealCard";
import { v4 as uuidv4 } from "uuid";
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
              difficulty={item.difficulty}
              time={item.time}
              key={uuidv4()}
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
  gap: 3rem;
  padding-bottom: 3rem;
`;

export { Explore };
