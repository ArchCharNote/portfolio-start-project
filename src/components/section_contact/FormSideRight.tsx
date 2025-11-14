import { styled } from "styled-components";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Phone } from "../../assets/icons/telephone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";

export const FormSideRight = () => {
  return (
    <StyleFormSideRight>
      <DivInline>
        <Icon>
          <Location />
        </Icon>
        <InfoIcon>
          <InfoIconTile>Location</InfoIconTile>
          <InfoIconDesc>Mashhad/Iran</InfoIconDesc>
        </InfoIcon>
      </DivInline>
      <DivInline>
        <Icon>
          <Phone />
        </Icon>
        <InfoIcon>
          <InfoIconTile>Phone</InfoIconTile>
          <InfoIconDesc>+989336063923</InfoIconDesc>
        </InfoIcon>
      </DivInline>
      <DivInline>
        <Icon>
          <Email />
        </Icon>
        <InfoIcon>
          <InfoIconTile>Email</InfoIconTile>
          <InfoIconDesc>arkn@gmail.com</InfoIconDesc>
        </InfoIcon>
      </DivInline>
    </StyleFormSideRight>
  );
};

const StyleFormSideRight = styled.div``;
const Icon = styled.div``;
const InfoIcon = styled.div``;
const InfoIconTile = styled.div``;
const InfoIconDesc = styled.div``;

const DivInline = styled.div`
  display: flex;
  gap: 7px;
`;
