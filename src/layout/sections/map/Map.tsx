import styled from "styled-components";

import { WrapperContent } from "../../../components/WrapperContent";
import { Contenst } from "./Contenst";

export const Map = () => {
  return (
    <StyledMap>
      <WrapperContent>
        <Contenst />
      </WrapperContent>
    </StyledMap>
  );
};

const StyledMap = styled.section`
  min-height: 100vh;
  background-color: darkcyan;
  display: flex;
  justify-content: center;
`;
