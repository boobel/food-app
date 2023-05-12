import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <StyledMain>
        <StyledHeader>
          This is a quick web app designed as a task for a job opportunity
        </StyledHeader>
        <StyledArticle>
          For the task, I decided to create go for a recipe book, which utilizes
          this{" "}
          <a href="https://rapidapi.com/apininjas/api/recipe-by-api-ninjas/">
            API
          </a>{" "}
          to get recipes queried by the user in the explore tab. The recipes are
          stored in localStorage and accessed from different components with
          usage of React Context. The user can also save some favourites in the
          My Recipes tab, these favourites can edited to the users liking. I
          used the Home tab mostly to talk about this app a bit.
        </StyledArticle>
        <StyledArticle>
          <StyledList>
            <StyledHeading>
              Given more time there is a few things that I would have done
              differently:
            </StyledHeading>
            <StyledItem>
              I would've use something like React Redux for state management and
              data storage
            </StyledItem>
            <StyledItem>
              I would've gome for a more flashy UI design, ideally starting with
              a Figma mock-up
            </StyledItem>
            <StyledItem>
              I would have gone for an API with more advanced request, there are
              projects in my portfolio that highlight this ability
            </StyledItem>
          </StyledList>
        </StyledArticle>
        <StyledArticle>
          Explore the app and see if it's upto your standards. I hope it
          qualifies me for the next round of interviews {":)"}.
        </StyledArticle>
        <StyledArticle>
          Note: Some Privacy browser, or extensions (e.g. Brave Browser) will
          periodically clean localStorage, therefore seeming like the state of
          the app does not persist.
        </StyledArticle>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  margin: 0 auto;
  width: 85%;
  padding: 2rem;
  box-shadow: 25px 25px black;
`;

const StyledArticle = styled.article`
  width: 80%;
  margin: 0 auto;
`;

const StyledHeader = styled.span`
  text-align: center;
  font-weight: 800;
  font-size: 120%;
`;

const StyledHeading = styled.span`
  text-align: center;
  font-weight: 600;
  font-size: 110%;
  margin-bottom: 1rem;
`;

const StyledList = styled.ul``;

const StyledItem = styled.li`
  margin-left: 2rem;
  width: 80%;
`;

export { Home };
