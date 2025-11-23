import React from "react";
import {ImageBlock} from "./ImageBlock";
import {styled} from "styled-components";

type StyleBlocksProps = {
    text: string;
    imgs: string;
};

export const Blocks = (props: StyleBlocksProps) => {
    return (
        <>
            <TextBlocks>{props.text}</TextBlocks>
            <StyleBlocks>
                <ImageBlock img={props.imgs}/>
                <ImageBlock img={props.imgs}/>
                <ImageBlock img={props.imgs}/>
                <ImageBlock img={props.imgs}/>
            </StyleBlocks>
        </>

    );
};

const StyleBlocks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    overflow-x: clip;
`;
const TextBlocks = styled.div`
    padding: 14px 0;
`;

