import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="#">Story</a>
        </li>
        <li>
          <a href="#">Post</a>
        </li>
        <li>
          <a href="#">Banner</a>
        </li>
        <li>
          <a href="#">Trailer</a>
        </li>
        <li>
          <a href="#">Desighn</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 60px;
    justify-content: center;
  }
`;
