import { styled } from "styled-components";

type ImageBlockPropsStyle = {
  img: string;
};

export const ImageBlock = (props: ImageBlockPropsStyle) => {
  return (
    <StyledImageBlock>
      <img src={props.img} alt="" />
    </StyledImageBlock>
  );
};

const StyledImageBlock = styled.div`
  width: 330px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 9px;
  }
`;
