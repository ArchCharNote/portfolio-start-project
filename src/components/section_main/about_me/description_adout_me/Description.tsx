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
const BodyDescription = styled.p`
  margin: 30px 0;
`;
const ButtonsDescription = styled.button``;
const ButtonDescription = styled.button<ButtonPropsType>`
  padding: 16px 8px;

  border-radius: 13px;
  width: 200px;
  font-size: 16px;
  color: ${(props) =>
    props.$withArrow ? Theme.colors.text : Theme.colors.light};
  background-color: ${(props) =>
    props.$withArrow ? Theme.colors.active : "transporent"};
  font-weight: bold;

  &::after {
    content: ${(props) => (props.$withArrow ? "'→'" : "''")};
    padding-left: 6px;
  }

  &:hover {
    cursor: pointer;
  }
`;
