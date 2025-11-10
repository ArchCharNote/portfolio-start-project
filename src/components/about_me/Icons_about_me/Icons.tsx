import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as Ellipse } from "../../../assets/icons/Ellipse.svg";
import { styled } from "styled-components";

export const Icons = () => {
  return (
    <>
      <IconPlus>
        <Plus />
      </IconPlus>
      <IconElipse>
        <Ellipse />
      </IconElipse>
    </>
  );
};

const IconPlus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;
const IconElipse = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 5;
`;
