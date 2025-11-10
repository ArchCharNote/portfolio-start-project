import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href=""></a>Story
        </li>
        <li>
          <a href=""></a>Post
        </li>
        <li>
          <a href=""></a>Banner
        </li>
        <li>
          <a href=""></a>Trailer
        </li>
        <li>
          <a href="">Desighn</a>
        </li>
        <li>
          <a href="">More</a>
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
