import { styled } from "styled-components";

export const WrapperModal = () => {
  return (
    <WrapperMod>
      <Modal>
        <DescriptionStyle>
          <HeadDescription>I’m Alireza Kavousy nezjad</HeadDescription>
          <BodyDescription>
            <li>I was born in Iran-Mashhad</li>
            <li>I’m 20 years old</li>
            <li>I have started my interest in this field from 2019</li>
            <li>I’m designer , video editor , web developer and ...</li>
            <li>My phone number in Iran +989212073348</li>
          </BodyDescription>
        </DescriptionStyle>
      </Modal>
    </WrapperMod>
  );
};

const WrapperMod = styled.div`
  min-height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Modal = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 500px;
  background-color: #3f3f3f;
  margin-bottom: 50px;
`;
const DescriptionStyle = styled.div``;
const HeadDescription = styled.h2``;
const BodyDescription = styled.ul``;
