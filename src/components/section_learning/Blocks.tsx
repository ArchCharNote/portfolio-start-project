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
                <ImageBlocks>
                    <ImageBlock img={props.imgs}/>
                    <ImageBlock img={props.imgs}/>
                    <ImageBlock img={props.imgs}/>
                    <ImageBlock img={props.imgs}/>
                    <ImageBlock img={props.imgs}/>
                </ImageBlocks>
            </StyleBlocks>
        </>

    );
};

const StyleBlocks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: overlay;
`;
const TextBlocks = styled.div`
    padding: 14px 0;
`;
const ImageBlocks = styled.div`
    display: flex;
    gap: 12px;
`;
