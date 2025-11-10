import React from "react";
import styled from "styled-components";
import { ReactComponent as PlusBig } from "../../../assets/icons/plusBig.svg";

export const Projects = () => {
  return (
    <StyledProjects>
      <Wrapper>
        <Nameming>Projects</Nameming>
        <Menu>
          <ul>
            <li>
              <a href=""></a>Story
            </li>
            <li>
              <a href=""></a>Post
            </li>
            <li>
              <a href=""></a>Banner
            </li>
            <li>
              <a href=""></a>Trailer
            </li>
            <li>
              <a href="">Desighn</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </ul>
        </Menu>
        <Cards>
          <Card>
            <ImgCard>
              <img src="" alt="" />
            </ImgCard>
            <DescriptionCard>
              Story motion for sale English cources
            </DescriptionCard>
            <ButtonsCard>
              <ButtonCard>Edit for you</ButtonCard>
              <ButtonCard>See preview</ButtonCard>
            </ButtonsCard>
          </Card>
          <Card>
            <ImgCard>
              <img src="" alt="" />
            </ImgCard>
            <DescriptionCard>
              Story motion for sale English cources
            </DescriptionCard>
            <ButtonsCard>
              <ButtonCard>Edit for you</ButtonCard>
              <ButtonCard>See preview</ButtonCard>
            </ButtonsCard>
          </Card>
          <Card>
            <ImgCard>
              <img src="" alt="" />
            </ImgCard>
            <DescriptionCard>
              Story motion for sale English cources
            </DescriptionCard>
            <ButtonsCard>
              <ButtonCard>Edit for you</ButtonCard>
              <ButtonCard>See preview</ButtonCard>
            </ButtonsCard>
          </Card>

          <Card>
            <ImgCard>
              <img src="" alt="" />
            </ImgCard>
            <DescriptionCard>
              Story motion for sale English cources
            </DescriptionCard>
            <ButtonsCard>
              <ButtonCard>Edit for you</ButtonCard>
              <ButtonCard>See preview</ButtonCard>
            </ButtonsCard>
          </Card>
          <Card>
            <ImgCard>
              <img src="" alt="" />
            </ImgCard>
            <DescriptionCard>
              Story motion for sale English cources
            </DescriptionCard>
            <ButtonsCard>
              <ButtonCard>Edit for you</ButtonCard>
              <ButtonCard>See preview</ButtonCard>
            </ButtonsCard>
          </Card>
          <Card>
            <ImgCard>
              <img src="" alt="" />
            </ImgCard>
            <DescriptionCard>
              Story motion for sale English cources
            </DescriptionCard>
            <ButtonsCard>
              <ButtonCard>Edit for you</ButtonCard>
              <ButtonCard>See preview</ButtonCard>
            </ButtonsCard>
          </Card>
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
const Menu = styled.nav`
  ul {
    display: flex;
    gap: 60px;
    justify-content: center;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;
const Card = styled.div`
  background-color: aliceblue;
  min-height: 350px;
  border-radius: 26px;
  width: 30%;
`;
const ImgCard = styled.div``;
const DescriptionCard = styled.div``;
const ButtonsCard = styled.div``;
const ButtonCard = styled.div``;
const Icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
