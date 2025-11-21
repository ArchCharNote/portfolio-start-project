import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ReactComponent as Play } from "../../../assets/icons/play.svg";
import { ReactComponent as Rewrite } from "../../../assets/icons/rewrite.svg";
import { ReactComponent as Doc } from "../../../assets/icons/doc.svg";
import { Card } from "../../../components/section_services/Card";

export const Services = () => {
  return (
    <StyledServices>
      <FlexWrapper>
        <Name>Services</Name>
        <Cards>
          <Card icon={Play} text="Video EditService" />
          <Card icon={Rewrite} text="Ui/Ux Designer" />
          <Card icon={Doc} text="Website Developer" />
        </Cards>
      </FlexWrapper>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;
const Name = styled.h2`
  text-align: center;
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 31px;
`;
