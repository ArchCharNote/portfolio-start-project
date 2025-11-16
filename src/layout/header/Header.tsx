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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 33px 43px 0px 35px;
`;
const RightSideHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
