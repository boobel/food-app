import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>My Food App.</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  text-align: center;
  color: white;
`;
export { Header };
