import styled, { keyframes } from "styled-components";
import Man from "../../../assets/images/man.webp";
import EllipseIcon from "../../../assets/icons/Ellipse.svg";
import PlusIcon from "../../../assets/icons/plus.svg";
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
      <Ellipse src={EllipseIcon} />
      <Plus src={PlusIcon} />
      <Content>
        <Image>
          <img src={Man} alt="" />
        </Image>
        <Description />
      </Content>

      <Plus />
    </StyleAboutMe>
  );
};

const StyleAboutMe = styled.div`
  background: linear-gradient(
    38deg,
    rgba(57, 57, 57, 0.6) 0%,
    rgba(0, 66, 255, 0.42) 100%
  );
  margin: 80px 130px 60px 150px;
  border: 2px solid #afafaf;
  border-radius: 201px 0;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(12px);
  padding: 42px 0 42px 104px;

  /* &::before {
    content: "";
    width: 100px;
    height: 100px;
    border: 10px solid red;
    position: absolute;
    top: -10px;
    border-radius: 50%;
  } */
`;

const Ellipse = styled.img`
  position: absolute;
  display: inline-block;
  right: -10px;
  bottom: -10px;
  width: 152px;
  height: 152px;
  /* background-image: url("${EllipseIcon}"); */
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${float} 9s ease-in-out infinite;
  animation-delay: 0.5s;
  z-index: -1;
`;

const Plus = styled.img`
  position: absolute;
  display: inline-block;
  left: 250px;
  top: -80px;
  width: 88px;
  height: 88px;
  /* background-image: url("${PlusIcon}"); */
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: 1s;
  z-index: -1;
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
