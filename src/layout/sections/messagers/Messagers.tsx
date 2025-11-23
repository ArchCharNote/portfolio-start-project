import styled from "styled-components";
import {ReactComponent as InstaWhite} from "../../../assets/icons/inta-white.svg";
import {ReactComponent as WhatsUpWhite} from "../../../assets/icons/whatsUp-white.svg";
import {ReactComponent as TelegaWhite} from "../../../assets/icons/telega-white.svg";
import {Theme} from "../../../styles/Theme";

export const Messagers = () => {
    return (
        <StyleMessagers>
            <WithoutWrapper>
                <a href="#"><InstaWhite/></a>
                <a href="#"><WhatsUpWhite/></a>
                <a href="#"><TelegaWhite/></a>
            </WithoutWrapper>
        </StyleMessagers>
    );
};

const StyleMessagers = styled.div`
    position: fixed;
    top: 50%;
    left: 0;
    z-index: 9999;
`;


const WithoutWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    width: 56px;
    padding: 10px;
    gap: 10px;
    align-items: center;
    border-radius: 0 12px 12px 0;
    position: absolute;
    left: 0;
    background-color: ${Theme.colors.secondaryBG};
    
    a{
        cursor: pointer;
    }
`;
