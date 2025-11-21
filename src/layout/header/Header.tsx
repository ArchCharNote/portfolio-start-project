import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { Menu } from "../../components/section_main/menu/Menu";
import styled from "styled-components";

const items = ["Home", "Projects", "About", "Content"];

export const Header = () => {
  return (
    <StyledHeader>
      <a href="#">
        <LogoIcon />
      </a>
      <RightSideHeader>
        <Menu items={items}></Menu>
        <MoonIcon />
      </RightSideHeader>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position: fixed;
  padding: 30px;
  z-index: 9999;
`;
const RightSideHeader = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;
`;
