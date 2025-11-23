import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ReactComponent as Play} from "../../../assets/icons/play.svg";
import {ReactComponent as Rewrite} from "../../../assets/icons/rewrite.svg";
import {ReactComponent as Doc} from "../../../assets/icons/doc.svg";
import {Card} from "../../../components/section_services/Card";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Services = () => {
    return (
        <StyledServices>
            <Name>Services</Name>
            <Container>
                <Cards>
                    <Card icon={Play} text="Video Edit Service"/>
                    <Card icon={Rewrite} text="Ui/Ux Designer"/>
                    <Card icon={Doc} text="Website Developer"/>
                </Cards>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    padding: 50px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
const Cards = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 60px 0;
    flex-wrap: wrap;
`;
