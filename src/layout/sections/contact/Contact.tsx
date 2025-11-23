import styled from "styled-components";

import {FormSideRight} from "../../../components/section_contact/FormSideRight";
import {FormSideLeft} from "../../../components/section_contact/FormSideLeft";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {ReactComponent as Insta} from "../../../assets/icons/inta.svg";
import {ReactComponent as WhatsUp} from "../../../assets/icons/whatsUp.svg";
import {ReactComponent as Telega} from "../../../assets/icons/telega.svg";

export const Contact = () => {
    return (
        <StyleContact>
            <Container>
                <Content>
                    <Name>Contact Us</Name>
                    <Form>
                        <ContenForm>
                            <FormSideLeft/>
                            <FormSideRight/>
                        </ContenForm>
                    </Form>
                </Content>

                <InlineIcons>
                    <a href="#"><Insta/></a>
                    <a href="#"><Telega/></a>
                    <a href="#"><WhatsUp/></a>
                </InlineIcons>
            </Container>

        </StyleContact>
    );
};

const StyleContact = styled.section`
    padding: 50px 0;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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

    margin-bottom: 100px;
`;

const Form = styled.form`
    background-color: ${Theme.colors.form};
    max-width: 932px;
    width: 100%;
    padding: 82px;
`;

const ContenForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
const InlineIcons = styled.nav`
    display: flex;
    gap: 22px;
    justify-content: center;
`;