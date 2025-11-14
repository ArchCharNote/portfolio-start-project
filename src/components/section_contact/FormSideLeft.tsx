import { styled } from "styled-components";

export const FormSideLeft = () => {
  return (
    <StyleFormSideLeft>
      <Get>Get in touch</Get>
      <SideLeftContent>
        <DivInline>
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone" />
        </DivInline>
        <textarea placeholder="Message" rows={5} />
        <button type="submit">Send</button>
      </SideLeftContent>
    </StyleFormSideLeft>
  );
};

const DivInline = styled.div`
  display: flex;
  gap: 7px;
`;
const StyleFormSideLeft = styled.div``;
const SideLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
const Get = styled.h2`
  text-align: left;
`;
