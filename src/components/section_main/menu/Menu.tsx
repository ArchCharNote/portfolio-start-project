import styled from "styled-components";

type MenuPropsType = {
    items: Array<string>;
};

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledUl>
            {props.items.map((item, index) => {
                return (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                );
            })}
        </StyledUl>
    );
};

const StyledUl = styled.ul`
    display: flex;
    gap: 60px;
        
`;
