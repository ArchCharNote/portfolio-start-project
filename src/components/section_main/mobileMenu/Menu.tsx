import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

type MobileMenuPropsType = {
    items: Array<string>;
};

export const MobileMenu = (props: MobileMenuPropsType) => {
    return (
        <StyledUl>
            <BurgerButton>
                <span></span>
            </BurgerButton>
            {props.items.map((item, index) => {
                return (
                        <a href="#">{item}</a>
                );
            })}
        </StyledUl>
    );
};

const StyledUl = styled.ul`
    display: flex;
    gap: 60px;     
`;

const BurgerButton =styled.button`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;

    span{
        display: block;
        width: 36px;
        height: 2px;
        color: ${Theme.colors.text};
    };
`