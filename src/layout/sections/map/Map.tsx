import styled from "styled-components";

import MapImg from "../../../assets/images/me.webp";

import {Theme} from "../../../styles/Theme";
import {WrapperModal} from "../../../components/section_map/WrapperModal";


export const Map = () => {
    return (
        <StyledMap>
            <WrapperModal/>
            <StyleMap/>
        </StyledMap>
    );
};

const StyledMap = styled.section`
    min-height: 100vh;
    background-color: ${Theme.colors.light};
    position: relative;
`;


const StyleMap = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${MapImg});
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
`;