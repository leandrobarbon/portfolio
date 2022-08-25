import styled from "styled-components";

export const Container = styled.div`
    width: 93px;
    min-width: 93px;
    height: 93px;
    background: #3FA796;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & p {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;

        color: #FFFFFF;
    }
`;