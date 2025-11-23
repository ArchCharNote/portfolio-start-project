import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

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
        padding-top: 50px;
        display: flex;
        gap: 41px;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const StyledLi = styled.li`
    border: 3px solid ${Theme.colors.border};
    padding: 8px 46px;;
    border-radius: 32px;
`;
