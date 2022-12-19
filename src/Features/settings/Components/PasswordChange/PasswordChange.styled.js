import styled from "styled-components";

export const ComponentDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 32px 0;

`;


export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 8px;
    max-width: 80%;
`;

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ComponentHeader = styled.h3`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #1c1c1c;
    display: flex;
    margin-bottom: 4px;
`;

export const ComponentContent = styled.p`
    font-weight: 400;
    color: #7c7c7c;
    font-size: 12px;
    line-height: 16px;
`;

export const RightDiv = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
`;

export const ButtonDiv = styled.div`
    float: right;
    position: relative;
`;

export const Button = styled.button`
    position: relative;
    border: 1px solid #0079D3;
    color: #0079D3;
    fill: #0079D3;

    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;

    align-items: center;
    border-radius: 9999px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;
    width: auto;
    background: transparent;
    cursor: pointer;

    &:hover {
        background: rgba(127, 188, 233, 0.09);
    }
`;