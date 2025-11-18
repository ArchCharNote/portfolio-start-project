import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

type CardPropsStyle = {
  img?: string;
  description?: string;
};

export const Card = (props: CardPropsStyle) => {
  return (
    <StyledCart>
      <ImgCard>
        <img src={props.img} alt="" />
      </ImgCard>
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

const StyledCart = styled.div`
  background-color: ${Theme.colors.secondaryText};
  min-height: 350px;
  border-radius: 32px;
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 7px #00000015;
`;
const ImgCard = styled.div`
  height: 240px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px 30px 0 0;
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
