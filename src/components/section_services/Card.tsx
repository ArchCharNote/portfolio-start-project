import {ComponentType, SVGProps} from "react";
import {styled} from "styled-components";
import {Theme} from "../../styles/Theme";

type CardPropsType = {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    text: string;
};

export const Card = (props: CardPropsType) => {
    const IconComponent = props.icon;
    return (
        <StyledCard>
            <Icon>
                <IconComponent/>
            </Icon>
            <Text>{props.text}</Text>
            <Link>View More </Link>
        </StyledCard>
    );
};

const StyledCard = styled.article`
    min-height: 400px;
    max-width: 334px;
    width: 100%;
    background-color: ${Theme.colors.card};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 56px;
`;
const Icon = styled.span`
    padding-bottom: 30px;
`;
const Text = styled.h2`
    max-width: 150px;
    width: 100%;
    padding-bottom: 30px;
    
`;
const Link = styled.a`
    color: ${Theme.colors.active};
    
    &::after{
        content: '➜';
        padding-left: 6px;
    }
`;
