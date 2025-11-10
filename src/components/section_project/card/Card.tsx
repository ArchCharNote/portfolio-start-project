import styled from "styled-components";

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
      <DescriptionCard>{props.description}</DescriptionCard>
      <ButtonsCard>
        <ButtonCard>Edit for you</ButtonCard>
        <ButtonCard>See preview</ButtonCard>
      </ButtonsCard>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  background-color: aliceblue;
  min-height: 350px;
  border-radius: 26px;
  width: 30%;
`;
const ImgCard = styled.div``;
const DescriptionCard = styled.div``;
const ButtonsCard = styled.div``;
const ButtonCard = styled.div``;
