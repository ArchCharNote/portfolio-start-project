import styled from "styled-components";
import { ReactComponent as Wave } from "../../assets/icons/wave.svg";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Grouped>
        <Wave />
        <Background />
      </Grouped>
      <Text>
        <div>Coded by Alireza Kavousy nezhad</div>
        <div>All Rights Reserved 2022</div>
      </Text>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  min-height: 243px;
  display: flex;
  justify-content: flex-end;
`;

const Background = styled.div`
  background-color: ${Theme.colors.secondaryBG};
  min-height: 110px;
  margin-top: -10px;
  width: 100%;
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
