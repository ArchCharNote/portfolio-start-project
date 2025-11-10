import styled from "styled-components";
import { Header } from "../../header/Header";
import { AboutMe } from "../../../components/section_main/about_me/AboutMe";
import { Skills } from "../../../components/section_main/skills/Skills";

export const Main = () => {
  return (
    <StyledMain>
      <Header />
      <AboutMe />
      <Skills />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #cffffb;
  padding-top: 30px;
`;
