import styled from "styled-components";
import Man from "../../assets/images/man.webp";
import { Icons } from "./Icons_about_me/Icons";
import { Description } from "./description_adout_me/Description";

export const AboutMe = () => {
  return (
    <StyleAboutMe>
      <Icons />
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
  background-color: bisque;
  margin: 80px 210px;
  border: 2px solid #afafaf;
  border-radius: 201px 0;
  position: relative;
`;
const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  img {
    width: 401px;
    height: 401px;
    border: 25px solid #fff;
    border-radius: 201px;
  }
`;
