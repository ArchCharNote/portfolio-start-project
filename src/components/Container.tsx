import styled from "styled-components";

type ContainerProps = {
    minHeight?: string;
}

export const Container = styled.div<ContainerProps>`
    max-width: 1224px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    min-height: ${(props) => props.minHeight || 0};
`