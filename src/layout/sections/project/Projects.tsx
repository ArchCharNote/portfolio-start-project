import styled from "styled-components";
import { ReactComponent as PlusBig } from "../../../assets/icons/plusBig.svg";
import { Menu } from "../../../components/section_project/menu/Menu";
import { Card } from "../../../components/section_project/card/Card";

export const Projects = () => {
  return (
    <StyledProjects>
      <Wrapper>
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
      </Wrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  min-height: 100vh;
  background-color: darkgray;
`;

const Wrapper = styled.div`
  margin: 100px;
  background-color: #608b91;
  position: relative;
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
