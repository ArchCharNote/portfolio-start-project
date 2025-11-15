import styled from "styled-components";
import { ReactComponent as Wave } from "../../assets/icons/wave.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <Grouped>
        <Wave />
        <Background>
          <Text>
            <div>Coded by Alireza Kavousy nezhad</div>
            <div>All Rights Reserved 2022</div>
          </Text>
        </Background>
      </Grouped>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  background-color: goldenrod;
  min-height: 243px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

const Background = styled.div`
  background-color: #24335c;
  min-height: 110px;
  margin-top: -10px;
  width: 100%;
`;

const Grouped = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div``;
