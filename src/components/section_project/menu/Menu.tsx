import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <StyledLi>
          <a href="#">Story</a>
        </StyledLi>
        <StyledLi>
          <a href="#">Post</a>
        </StyledLi>
        <StyledLi>
          <a href="#">Banner</a>
        </StyledLi>
        <StyledLi>
          <a href="#">Trailer</a>
        </StyledLi>
        <StyledLi>
          <a href="#">Desighn</a>
        </StyledLi>
        <StyledLi>
          <a href="#">More</a>
        </StyledLi>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    margin-top: 60px;
    display: flex;
    gap: 60px;
    justify-content: center;
  }
`;

const StyledLi = styled.li`
  border: 3px solid ${Theme.colors.border};
  padding: 10px 60px;
  border-radius: 32px;
`;
