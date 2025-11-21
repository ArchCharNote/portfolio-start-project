import styled, { keyframes } from "styled-components";
import Man from "../../../assets/images/man.webp";
import { Description } from "./description_adout_me/Description";

const float = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(10px, -10px) rotate(5deg);
  }
`;

export const AboutMe = () => {
  return (
    <StyleAboutMe>
      <Content>
        <Image>
          <img src={Man} alt="" />
        </Image>
        <Description />
      </Content>
    </StyleAboutMe>
  );
};

const StyleAboutMe = styled.div`
  background: linear-gradient(
    38deg,
    rgba(57, 57, 57, 0.6) 0%,
    rgba(0, 66, 255, 0.42) 100%
  );
  border: 2px solid #afafaf;
  border-radius: 201px 0;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(12px);
  padding: 80px;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const Image = styled.div`
  img {
    width: 400px;
    height: 400px;
    border: 25px solid #fff;
    border-radius: 50%;
  }
`;
