import styled from "styled-components";
import Car from "../../../assets/images/car.webp";
import City from "../../../assets/images/city.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Blocks} from "../../../components/section_learning/Blocks";
import {Theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Learning = () => {
    return (
        <StyledLearning>
            <Name>Learning</Name>
            <Container>
                <Paddings>
                    <Blocks imgs={Car} text="After Effects & Photoshop"/>
                    <Blocks imgs={City} text="Website , Html & CSS"/>
                </Paddings>
            </Container>
        </StyledLearning>
    );
};

const StyledLearning = styled.section`
    padding: 50px 0;
    background-color: ${Theme.colors.secondaryBG};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;

`;

const Name = styled.h2`
    text-align: center;
    position: relative;

    &::after {
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: ${Theme.colors.active};
        background: linear-gradient(
                0deg,
                rgba(33, 87, 242, 1) 0%,
                rgba(166, 188, 250, 1) 100%
        );
        position: absolute;
        bottom: -22px;
        left: 50%;
        left: calc(50% - 9px);
        transform-origin: 50% 50%;
    }
`;

const Paddings = styled.div`
    padding: 40px 0;
`