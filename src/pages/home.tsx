import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <StyledMain>
        <article>This is a quick web app designed</article>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main``;

export { Home };
