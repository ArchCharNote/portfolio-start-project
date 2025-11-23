import {styled} from "styled-components";

export const WrapperModal = () => {
    return (
        <WrapperMod>
            <Modal>
                <DescriptionStyle>
                    <HeadDescription>I’m Alireza Kavousy nezjad</HeadDescription>
                    <BodyDescription>
                        <LiStyled>I was born in Iran-Mashhad</LiStyled>
                        <LiStyled>I’m 20 years old</LiStyled>
                        <LiStyled>I have started my interest in this field from 2019</LiStyled>
                        <LiStyled>I’m designer , video editor , web developer and ...</LiStyled>
                        <LiStyled>My phone number in Iran +989212073348</LiStyled>
                    </BodyDescription>
                </DescriptionStyle>
            </Modal>
        </WrapperMod>
    );
};

const WrapperMod = styled.div`
    position: absolute;
    bottom: 12%;
    left: 10%;
`;

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    min-height: 300px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 100px 0;
    z-index: 10;
    backdrop-filter: blur(12px);
    padding: 50px;
`;
const DescriptionStyle = styled.div``;
const HeadDescription = styled.h2``;
const BodyDescription = styled.ul`
    padding-left: 30px;
`;
const LiStyled = styled.li`
    padding: 6px 0;
    &::before {
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #2157F2;
        background: linear-gradient(0deg, rgba(33, 87, 242, 1) 0%, rgba(166, 188, 250, 1) 100%);
        position: absolute;
        left: 48px;
    }
`
