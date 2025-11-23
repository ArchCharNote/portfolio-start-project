import styled from "styled-components";
import {AboutMe} from "../../../components/section_main/about_me/AboutMe";
import {Skills} from "../../../components/section_main/skills/Skills";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";
import Plus from "../../../assets/icons/plus.svg";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container minHeight='100vh'>
                <FlexWrapper align="center" justify="space-between" direction="column" minHeight='100vh'>
                    <WrapperGlass>
                        <AboutMe/>
                    </WrapperGlass>
                    <Skills/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(
            90deg,
            ${Theme.colors.secondaryBG} 32%,
            ${Theme.colors.primaryBg} 0
    );
`;


const WrapperGlass = styled.div`
    position: relative;
    display: flex;
    margin-top: 15%;
    
    &::after {
        content: "";
        position: absolute;
        top: -17%;
        left: 40%;
        width: 100px;
        height: 100px;
        background: url(${Plus}) center/contain no-repeat;
    }

    &::before {
        content: "";
        width: 152px;
        height: 152px;
        border: 25px solid #213c8a;
        position: absolute;
        bottom: 0;
        border-radius: 50%;
        right: 0;
    }
`;
