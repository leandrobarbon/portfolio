import styled from "styled-components";

interface colorsProps {
    colorProp: string;
    width?: string;
}

export const colorEtiqueta = ({colorProp}: colorsProps) => {
    switch(colorProp) {
        case 'green':
            return `background: #3FA796;`;
        case 'red': 
            return `background: #A10035;`;
    }
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;
`;

export const Feature = styled.div`
    ${({ colorProp }: colorsProps) => colorProp && colorEtiqueta({colorProp})};
    width: ${({width}) => width};
    height: 2px;
`;