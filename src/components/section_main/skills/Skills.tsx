import Photoshop from "../../../assets/images/ps.webp";
import AfterEffects from "../../../assets/images/ae.webp";
import Illustrator from "../../../assets/images/ai.webp";
import Figma from "../../../assets/images/figma.webp";
import styled from "styled-components";
import { Block } from "./block_skills/Block";

export const Skills = () => {
  return (
    <StyledSkills>
      <Blocks>
        <Block img={Photoshop} text="Photoshop" />
        <Block img={AfterEffects} text="After Effects" />
        <Block img={Illustrator} text="Illustrator" />
        <Block img={Figma} text="Figma" />
      </Blocks>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  width: 100%;
`;
const Blocks = styled.span`
  display: flex;
  gap: 12px;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;
