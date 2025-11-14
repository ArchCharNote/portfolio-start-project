import styled from "styled-components";

import { ReactComponent as Insta } from "../../../assets/icons/inta.svg";
import { ReactComponent as InstaWhite } from "../../../assets/icons/inta-white.svg";

import { ReactComponent as WhatsUp } from "../../../assets/icons/whatsUp.svg";
import { ReactComponent as WhatsUpWhite } from "../../../assets/icons/whatsUp-white.svg";

import { ReactComponent as Telega } from "../../../assets/icons/telega.svg";
import { ReactComponent as TelegaWhite } from "../../../assets/icons/telega-white.svg";

export const Messagers = () => {
  return (
    <StyleMessagers>
      <WithoutWrapper>
        <InstaWhite />
        <WhatsUpWhite />
        <TelegaWhite />
      </WithoutWrapper>
      <InlineIcons>
        <Insta />
        <Telega />
        <WhatsUp />
      </InlineIcons>
    </StyleMessagers>
  );
};

const StyleMessagers = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
`;
const InlineIcons = styled.nav`
  display: flex;
  gap: 22px;
`;

const WithoutWrapper = styled.nav`
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  width: 56px;
  padding: 10px;
  gap: 10px;
  align-items: center;
  border-radius: 0 12px 12px 0;
  position: absolute;
  left: 0;
`;
