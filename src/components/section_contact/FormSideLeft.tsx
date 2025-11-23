import {styled} from "styled-components";
import {Theme} from "../../styles/Theme";

export const FormSideLeft = () => {
    return (
        <StyleFormSideLeft>
            <Get>Get in touch</Get>
            <SideLeftContent>
                <DivInline>
                    <input type="email" placeholder="E-mail"/>
                    <input type="tel" placeholder="Phone"/>
                </DivInline>
                <textarea placeholder="Message" rows={8}/>
                <button type="submit">Send</button>
            </SideLeftContent>
        </StyleFormSideLeft>
    );
};


const StyleFormSideLeft = styled.div`
    width: 100%;
`;
const Get = styled.h2`
    text-align: left;
    padding-bottom: 24px;
    font-weight: 400;
`;

const SideLeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    
    input, textarea {
        color: ${Theme.colors.text};
        background: ${Theme.colors.input};
        border-width: 0;
        border-radius: 8px;
        padding: 12px 18px;
        font-size: 14px;
        width: 100%;
    }
    textarea {
        resize: none;
        margin-bottom: 20px;
    }

    button {
        background-color: #2350D6;
        color: ${Theme.colors.text};
        width: 116px;
        padding: 14px 22px;
        border-radius: 10px;
    }
`;
const DivInline = styled.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
`;
