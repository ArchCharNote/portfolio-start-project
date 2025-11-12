import { styled } from "styled-components";
import Man from "../../../assets/images/man2.webp";
import MapImg from "../../../assets/images/map.webp";
import { WrapperModal } from "../../../components/section_map/WrapperModal";

export const Contenst = () => {
  return (
    <Content>
      <StyleMap>
        <img src={MapImg} alt="" />
      </StyleMap>
      <StyledMan>
        <img src={Man} alt="" />
      </StyledMan>
      <WrapperModal />
    </Content>
  );
};

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
`;
const StyleMap = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  height: 100%;
  padding: 66px 46px;
  img {
    object-fit: cover;
  }
  position: absolute;
`;
const StyledMan = styled.div`
  right: 0;
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    object-fit: cover;
  }
`;
