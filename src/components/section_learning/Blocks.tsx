import React from "react";
import { ImageBlock } from "./ImageBlock";
import { styled } from "styled-components";

type StyleBlocksProps = {
  text: string;
  imgs: string;
};

export const Blocks = (props: StyleBlocksProps) => {
  return (
    <StyleBlocks>
      <TextBlocks>{props.text}</TextBlocks>
      <ImageBlocks>
        <ImageBlock img={props.imgs} />
        <ImageBlock img={props.imgs} />
        <ImageBlock img={props.imgs} />
        <ImageBlock img={props.imgs} />
        <ImageBlock img={props.imgs} />
      </ImageBlocks>
    </StyleBlocks>
  );
};

const StyleBlocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const TextBlocks = styled.div``;
const ImageBlocks = styled.div`
  display: flex;
  gap: 12px;
`;
