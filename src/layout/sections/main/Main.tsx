import styled from "styled-components";
import { Header } from "../../header/Header";
import { AboutMe } from "../../../components/section_main/about_me/AboutMe";
import { Skills } from "../../../components/section_main/skills/Skills";
import { WrapperContent } from "../../../components/WrapperContent";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <LeftBg />
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
  display: flex;
  justify-content: center;
`;
const LeftBg = styled.div`
  background-color: ${Theme.colors.secondaryBG};
  min-width: 468px;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 0;
`;
