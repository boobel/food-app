import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { FoodContext } from "../context/FoodContext";
import { FavouriteMealCard } from "../components/FavouriteMealCard";
import styled from "styled-components";

const Recipes: React.FC = () => {
  const { favouriteFoodData } = useContext(FoodContext);
  return (
    <>
      <Header />
      <Nav />
      <StyledSection>
        {favouriteFoodData.map((item) => {
          return (
            <FavouriteMealCard
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
  gap: 3rem;
  padding-bottom: 3rem;
`;

export { Recipes };
