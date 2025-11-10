import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { Menu } from "../../components/section_main/menu/Menu";
import styled from "styled-components";

const items = ["Home", "Projects", "About", "Content"];

export const Header = () => {
  return (
    <StyledHeader>
      <LogoIcon />
      <RightSideHeader>
        <Menu items={items}></Menu>
        <MoonIcon />
      </RightSideHeader>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #5c5c5c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 60px;
`;
const RightSideHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
