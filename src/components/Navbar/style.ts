import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 93px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 46px 0;

    > a {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;

        color: #FEC260;
    }
`;

export const Navegation = styled.div`
    display: flex;
    gap: 100px;
    align-items: center;

    > nav {
        display: flex;
        gap: 36px;

        a {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;

            color: #FFFFFF;
        }
    }
`;

export const Language = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    > button {
        background: transparent;
        border: none;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;

        color: #FFFFFF;

        &:hover {
            color: #FEC260CC;
        }
    }

    > p {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;

        color: #FFFFFF;
    }

    .disable {
        color: #434343;
    }
`;