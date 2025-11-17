import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";

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
      <TextBlock>{props.text}</TextBlock>
    </StyledBlock>
  );
};

const StyledBlock = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: ${Theme.colors.secondaryBG};
  display: flex;
  justify-content: center;
  width: 160px;
`;
const TextBlock = styled.div``;

const Image = styled.div`
  position: absolute;
  top: -38px;
  img {
    width: 65px;
    height: 65px;
    border: 10px solid ${Theme.colors.primaryBg};
    border-radius: 50%;
  }
`;
