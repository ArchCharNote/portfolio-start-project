import React from "react";
import { styled } from "styled-components";

type ButtonPropsType = {
  $withArrow?: boolean;
};

export const Description = () => {
  return (
    <>
      <DescriptionStyle>
        <HeadDescription>I’m Alireza Kavousy nezjad</HeadDescription>
        <BodyDescription>
          Draft is a revolutionary mobile app built to help you manage your
          business easily and save your money.
        </BodyDescription>
        <ButtonsDescription>
          <ButtonDescription $withArrow>See Projects</ButtonDescription>
          <ButtonDescription>Download Resume</ButtonDescription>
        </ButtonsDescription>
      </DescriptionStyle>
    </>
  );
};

const DescriptionStyle = styled.div``;
const HeadDescription = styled.h2``;
const BodyDescription = styled.p``;
const ButtonsDescription = styled.div``;

const ButtonDescription = styled.button<ButtonPropsType>`
  padding: 10px;

  &::after {
    content: ${(props) => (props.$withArrow ? "'→'" : "''")};
  }
`;
