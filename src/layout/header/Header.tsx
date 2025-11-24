import {ReactComponent as MoonIcon} from "../../assets/icons/moon.svg";
import {ReactComponent as LogoIcon} from "../../assets/icons/logo.svg";
import {Menu} from "../../components/section_main/menu/Menu";
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/section_main/mobileMenu/Menu";

const items = ["Home", "Projects", "About", "Content"];

export const Header = () => {
    return (
        <StyledHeader>
            <a href="#">
                <LogoIcon/>
            </a>
            <RightSideHeader>
                <Menu items={items}></Menu>
                <a href="#"><MoonIcon/></a>
            </RightSideHeader>
            <MobileRightSideHeader>
                <MobileMenu items={items}></MobileMenu>
            </MobileRightSideHeader>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
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
    
    @media ${Theme.media.tablet} {
        display: none;
    }
`;
const MobileRightSideHeader = styled.nav`
    display: flex;
    align-items: center;
    gap: 60px;
    
`;