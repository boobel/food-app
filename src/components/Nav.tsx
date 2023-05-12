import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

interface StyledLinkProps extends NavLinkProps {
  activeclassname: string;
}

const Nav: React.FC = () => {
  return (
    <>
      <StyledList>
        <StyledLink to="/" activeclassname="active">
          Home
        </StyledLink>
        <StyledLink to="/recipes" activeclassname="active">
          My Recipes
        </StyledLink>
        <StyledLink to="/explore" activeclassname="active">
          Explore
        </StyledLink>
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

const StyledLink = styled(NavLink)<StyledLinkProps>`
  position: relative;
  text-decoration: none;
  color: #ffffff;

  &.active {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

export { Nav };
