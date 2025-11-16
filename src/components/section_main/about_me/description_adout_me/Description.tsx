import { styled } from "styled-components";
import { Theme } from "../../../../styles/Theme";

type ButtonPropsType = {
  $withArrow?: boolean;
};

export const Description = () => {
  return (
    <>
      <DescriptionStyle>
        <HeadDescription>
          I’m <Name>Alireza</Name>
          <br />
          Kavousy nezjad
        </HeadDescription>
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

const Name = styled.span`
  color: ${Theme.colors.active};
`;
const DescriptionStyle = styled.div``;
const HeadDescription = styled.h2`
  font-size: 60px;
  font-weight: bold;
`;
const BodyDescription = styled.p``;
const ButtonsDescription = styled.div``;

const ButtonDescription = styled.button<ButtonPropsType>`
  padding: 10px;

  &::after {
    content: ${(props) => (props.$withArrow ? "'→'" : "''")};
  }
`;
