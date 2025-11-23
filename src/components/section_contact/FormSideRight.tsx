import { styled } from "styled-components";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Phone } from "../../assets/icons/telephone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";

export const FormSideRight = () => {
  return (
    <StyleFormSideRight>
      <DivInline>

          <Location />

        <InfoIcon>
          <InfoIconTile>Location</InfoIconTile>
          <InfoIconDesc>Mashhad/Iran</InfoIconDesc>
        </InfoIcon>
      </DivInline>
      <DivInline>

          <Phone />

        <InfoIcon>
          <InfoIconTile>Phone</InfoIconTile>
          <InfoIconDesc href="tel:+989336063923">+989336063923</InfoIconDesc>
        </InfoIcon>
      </DivInline>
      <DivInline>

          <Email />

        <InfoIcon>
          <InfoIconTile>Email</InfoIconTile>
          <InfoIconDesc href="mailto:arkn@gmail.com">
            arkn@gmail.com
          </InfoIconDesc>
        </InfoIcon>
      </DivInline>
    </StyleFormSideRight>
  );
};

const StyleFormSideRight = styled.div``;
const InfoIcon = styled.div`
    display: flex;
    flex-direction: column;
`;
const InfoIconTile = styled.span``;
const InfoIconDesc = styled.a`
    color: #8B8B8B;
`;

const DivInline = styled.div`
    display: flex;
    gap: 26px;
    padding-bottom: 40px;

`;
