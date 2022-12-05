import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

export const SelectionSpan = styled.span`
    
    margin-top: 16px;
    min-width: 30ch;
    display: flex;
    position: relative;
    border: 1px solid transparent;
    color: #0079D3;
    fill: #0079D3;

   

   
    
`;

export const Selection = styled.select`

    position: relative;
    border: 1px solid transparent;
    color: #0079D3;
    fill: #0079D3;

    flex: 1;

    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    appearance: none;
    background: none;
    border: none;
    padding-left: 4px;
    padding-right: 20px;

`;

export const Arrow = styled(AiFillCaretDown)`
    position: relative;
    border: 1px solid transparent;
    color: #0079D3;
    fill: #0079D3;

    margin-left: -20px;
    pointer-events: none;
    vertical-align: top;

    display: inline-block;
    height: 20px;
    width: 20px;

`;
