import styled from "styled-components";

type BlockPropsType = {
  img: string;
  text: string;
};

export const Block = (props: BlockPropsType) => {
  return (
    <StyledBlock>
      <Image>
        <img src={props.img} alt="" />
      </Image>
      <TextBlock>Photoshop</TextBlock>
    </StyledBlock>
  );
};

const StyledBlock = styled.div`
  padding: 20px 40px;
  background-color: cornflowerblue;
`;
const TextBlock = styled.div``;

const Image = styled.div`
  position: absolute;
  top: -26px;
  img {
    width: 55px;
    height: 55px;
    border: 10px solid #cffffb;
    border-radius: 55px;
  }
`;
