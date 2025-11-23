import styled from "styled-components";
import { ReactComponent as Wave } from "../../assets/icons/wave.svg";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Grouped>
        <Wave />
      </Grouped>
      <Text>
        <span>Coded by Alireza Kavousy nezhad</span>
        <span>All Rights Reserved 2025</span>
      </Text>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  min-height: 243px;
  display: flex;
  justify-content: flex-end;
`;

const Grouped = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  height: 243px;
  position: absolute;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
