import styled from "styled-components";
import Man from "../../../assets/images/man.webp";
import { Description } from "./description_adout_me/Description";


export const AboutMe = () => {
  return (
    <StyleAboutMe>
      <Content>
          <Image src={Man} alt="" />
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
  border-radius: 200px 0;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(12px);
  padding: 50px;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
    flex-wrap: wrap;
`;
const Image = styled.img`
    max-width: 350px;
    max-height: 350px;
    width: 100%;
    height: 100%;
    border: 25px solid #fff;
    border-radius: 50%;
`;
