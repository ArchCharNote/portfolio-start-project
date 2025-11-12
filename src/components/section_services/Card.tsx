import { ComponentType, SVGProps } from "react";
import { styled } from "styled-components";

type CardPropsType = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

export const Card = (props: CardPropsType) => {
  const IconComponent = props.icon;
  return (
    <StyledCard>
      <Icon>
        <IconComponent />
      </Icon>
      <Text>{props.text}</Text>
      <Link>View More</Link>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  min-height: 402px;
  width: 334px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Icon = styled.div``;
const Text = styled.div``;
const Link = styled.a``;
