import styled from "styled-components";

import { WrapperContent } from "../../../components/WrapperContent";
import { FormSideRight } from "../../../components/section_contact/FormSideRight";
import { FormSideLeft } from "../../../components/section_contact/FormSideLeft";

export const Contact = () => {
  return (
    <StyleContact>
      <WrapperContent>
        <Title>Contact Us</Title>
        <Form>
          <ContenForm>
            <FormSideLeft />
            <FormSideRight />
          </ContenForm>
        </Form>
      </WrapperContent>
    </StyleContact>
  );
};

const StyleContact = styled.section`
  background-color: gainsboro;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  background-color: #605ab3;
`;

const ContenForm = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
`;
