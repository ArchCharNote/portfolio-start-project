import styled from "styled-components";

import { FlexWrapper } from "../../../components/FlexWrapper";
import { FormSideRight } from "../../../components/section_contact/FormSideRight";
import { FormSideLeft } from "../../../components/section_contact/FormSideLeft";

export const Contact = () => {
  return (
    <StyleContact>
      <FlexWrapper>
        <Title>Contact Us</Title>
        <Form>
          <ContenForm>
            <FormSideLeft />
            <FormSideRight />
          </ContenForm>
        </Form>
      </FlexWrapper>
    </StyleContact>
  );
};

const StyleContact = styled.section`
  padding: 50px 0;
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
