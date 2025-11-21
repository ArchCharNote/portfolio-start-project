import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

type CardPropsStyle = {
  img?: string;
  description?: string;
};

export const Card = (props: CardPropsStyle) => {
  return (
    <StyledCart>
      <img src={props.img} alt="" />

      <BottomLayout>
        <DescriptionCard>
          {props.description ?? "Story motion for sale English cources"}
        </DescriptionCard>
        <ButtonsCard>
          <ButtonCard href="#">Edit for you</ButtonCard>
          <ButtonCard href="#">See preview</ButtonCard>
        </ButtonsCard>
      </BottomLayout>
    </StyledCart>
  );
};

const StyledCart = styled.article`
  background-color: ${Theme.colors.secondaryText};
  min-height: 350px;
  border-radius: 32px;
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 7px #00000015;
  overflow: hidden;
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
`;

const BottomLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 110px;
`;
const DescriptionCard = styled.div``;
const ButtonsCard = styled.div`
  display: flex;
  gap: 16px;
`;
const ButtonCard = styled.a``;
