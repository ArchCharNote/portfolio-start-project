import styled from "styled-components";
import { ReactComponent as PlusBig } from "../../../assets/icons/plusBig.svg";
import { Menu } from "../../../components/section_project/menu/Menu";
import { Card } from "../../../components/section_project/card/Card";
import { WrapperContent } from "../../../components/WrapperContent";

export const Projects = () => {
  return (
    <StyledProjects>
      <WrapperContent>
        <Nameming>Projects</Nameming>
        <Menu />
        <Cards>
          <Card img="" description="1" />
          <Card img="" description="2" />
          <Card img="" description="3" />
          <Card img="" description="4" />
          <Card img="" description="5" />
          <Card img="" description="6" />
        </Cards>
        <Icon>
          <PlusBig />
        </Icon>
      </WrapperContent>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: darkgray;
  display: flex;
  justify-content: center;
`;

const Nameming = styled.h2`
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;

const Icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
