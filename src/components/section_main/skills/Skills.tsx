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

const StyledSkills = styled.div``;
const Blocks = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;
