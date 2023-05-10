import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav: React.FC = () => {
  return (
    <>
      <StyledList>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/recipes">My Recipes</StyledLink>
        <StyledLink to="/explore">Explore</StyledLink>
      </StyledList>
    </>
  );
};

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding-left: 0;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #afa2a2;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #afa2a2;
  }
`;
export { Nav };
