import styled from "styled-components";
import Car from "../../../assets/images/car.webp";
import City from "../../../assets/images/city.webp";
import { WrapperContent } from "../../../components/WrapperContent";
import { Blocks } from "../../../components/section_learning/Blocks";

export const Learning = () => {
  return (
    <StyledLearning>
      <WrapperContent>
        <Name>Learning</Name>
        <Blocks imgs={Car} text="After Effects & Photoshop" />
        <Blocks imgs={City} text=">Website , Html & CSS" />
      </WrapperContent>
    </StyledLearning>
  );
};

const StyledLearning = styled.section`
  min-height: 100vh;
  background-color: #835926;
  display: flex;
  justify-content: center;
`;

const Name = styled.h2`
  text-align: center;
`;
