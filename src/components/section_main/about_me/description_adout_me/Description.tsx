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
        <LinksDescription>
          <LinkDescription $withArrow>See Projects</LinkDescription>
          <LinkDescription>Download Resume</LinkDescription>
        </LinksDescription>
      </DescriptionStyle>
    </>
  );
};

const Name = styled.span`
  color: ${Theme.colors.active};
`;
const DescriptionStyle = styled.div`
  max-width: 500px;
  text-align: left;
`;
const HeadDescription = styled.h2`
  font-size: 60px;
  font-weight: bold;
  padding-bottom: 30px;
`;
const BodyDescription = styled.p`
  padding-bottom: 30px;
`;
const LinksDescription = styled.div`
  display: flex;
  gap: 10px;
`;
const LinkDescription = styled.a<ButtonPropsType>`
  padding: 16px 8px;
  border-radius: 13px;
  width: 200px;
  font-size: 16px;
  color: ${(props) =>
    props.$withArrow ? Theme.colors.text : Theme.colors.light};
  background-color: ${(props) =>
    props.$withArrow ? Theme.colors.active : "transporent"};
  font-weight: bold;
  text-align: center;

  &::after {
    content: ${(props) => (props.$withArrow ? "'➜'" : "''")};
    padding-left: 6px;
  }
`;
