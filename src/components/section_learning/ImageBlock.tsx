import {styled} from "styled-components";

type ImageBlockPropsStyle = {
    img: string;
};

export const ImageBlock = (props: ImageBlockPropsStyle) => {
    return (

        <StyledImageBlock src={props.img} alt=""/>

    );
};

const StyledImageBlock = styled.img`
    box-shadow: 5px 6px 10px #0000006b;
    max-width: 330px;
    width: 100%;
    object-fit: cover;
    border-radius: 9px;

`;
