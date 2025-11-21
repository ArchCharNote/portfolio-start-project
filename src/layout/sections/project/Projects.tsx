import styled from "styled-components";
import { ReactComponent as PlusBig } from "../../../assets/icons/plusBig.svg";
import { Menu } from "../../../components/section_project/menu/Menu";
import { Card } from "../../../components/section_project/card/Card";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import Rectgl from "../../../assets/images/rectangle.webp";
import Rectg2 from "../../../assets/images/rectangle2.webp";
import Rectg3 from "../../../assets/images/rectangle3.webp";
import Rectg4 from "../../../assets/images/rectangle4.webp";

export const Projects = () => {
  return (
    <StyledProjects>
      <FlexWrapper align="center" justify="space-around" direction="column">
        <Nameming>Projects</Nameming>
        <Menu />
        <Cards>
          <Card img={Rectgl} />
          <Card img={Rectg2} />
          <Card img={Rectg3} />
          <Card img={Rectg4} />
          <Card img={Rectgl} />
          <Card img={Rectg2} />
          <Card img={Rectg3} />
          <Card img={Rectg4} />
        </Cards>
        {/* <Icon>
          <PlusBig />
        </Icon> */}
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  background-color: ${Theme.colors.primaryBg};
`;

const Nameming = styled.h2`
  text-align: center;
  padding-top: 60px;
  position: relative;
  &::before {
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${Theme.colors.active};
    background: linear-gradient(
      0deg,
      rgba(33, 87, 242, 1) 0%,
      rgba(166, 188, 250, 1) 100%
    );
    position: absolute;
    bottom: -30px;
    left: 50%;
    left: calc(50% - 9px);
    transform-origin: 50% 50%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
  margin-top: 20px;
  justify-content: center;
`;

const Icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
