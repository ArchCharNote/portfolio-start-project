import styled from "styled-components";
import Car from "../../../assets/images/car.webp";
import City from "../../../assets/images/city.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Blocks } from "../../../components/section_learning/Blocks";
import { Theme } from "../../../styles/Theme";

export const Learning = () => {
  return (
    <StyledLearning>
      <FlexWrapper align="center" justify="space-around" direction="column">
        <Name>Learning</Name>
        <Blocks imgs={Car} text="After Effects & Photoshop" />
        <Blocks imgs={City} text=">Website , Html & CSS" />
      </FlexWrapper>
    </StyledLearning>
  );
};

const StyledLearning = styled.section`
  padding: 50px 0;
  background-color: ${Theme.colors.secondaryBG};
  display: flex;
  justify-content: center;
`;

const Name = styled.h2`
  text-align: center;
`;
