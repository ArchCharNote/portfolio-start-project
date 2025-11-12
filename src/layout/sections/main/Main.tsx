import styled from "styled-components";
import { Header } from "../../header/Header";
import { AboutMe } from "../../../components/section_main/about_me/AboutMe";
import { Skills } from "../../../components/section_main/skills/Skills";
import { WrapperContent } from "../../../components/WrapperContent";

export const Main = () => {
  return (
    <StyledMain>
      <WrapperContent>
        <Header />
        <AboutMe />
        <Skills />
      </WrapperContent>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #cffffb;
  padding-top: 30px;
  display: flex;
  justify-content: center;
`;
