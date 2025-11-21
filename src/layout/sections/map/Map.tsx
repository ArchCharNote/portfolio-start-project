import styled from "styled-components";

import { FlexWrapper } from "../../../components/FlexWrapper";
import { Contenst } from "./Contenst";
import { Theme } from "../../../styles/Theme";

export const Map = () => {
  return (
    <StyledMap>
      <FlexWrapper align="center" justify="space-around" direction="column">
        <Contenst />
      </FlexWrapper>
    </StyledMap>
  );
};

const StyledMap = styled.section`
  min-height: 100vh;
  background-color: ${Theme.colors.light};
  display: flex;
  justify-content: center;
`;
