import styled from "styled-components";
import Man from "../../assets/images/man.webp";

import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Ellipse } from "../../assets/icons/Ellipse.svg";

export const AboutMe = () => {
  return (
    <StyleAboutMe>
      <IconPlus>
        <Plus />
      </IconPlus>
      <IconElipse>
        <Ellipse />
      </IconElipse>
      <Content>
        <Image>
          <img src={Man} alt="" />
        </Image>
        <Description></Description>
      </Content>
    </StyleAboutMe>
  );
};

const StyleAboutMe = styled.div`
  background-color: bisque;
  margin: 80px 150px;
  border: 2px solid #afafaf;
  border-radius: 201px 0;
  position: relative;
`;
const Content = styled.div`
  position: relative;
  z-index: 10;
`;
const Image = styled.div`
  img {
    width: 401px;
    height: 401px;
    border: 25px solid #fff;
    border-radius: 201px;
  }
`;
const Description = styled.div``;

const IconPlus = styled.div`
  position: absolute;
`;
const IconElipse = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
