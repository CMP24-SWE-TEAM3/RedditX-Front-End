import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 16px;
  width: 312px;
`;

export const InnerContainer = styled.div`
  background-color: ${({theme})=>theme.background.primary} ;
  border: 1px solid ${({theme})=>theme.borderColor.secondary};
  border-radius: 4px;
  overflow: visible;
  word-wrap: break-word;
`;

export const HeaderContainer = styled.div`
  background-color: ${({theme})=>theme.color.secondary};
  fill: ${({theme})=>theme.background.primary};
  color: ${({theme})=>theme.background.primary};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  border-radius: 3px 3px 0 0;
  padding: 0 12px 12px;
`;

export const InnerHeaderContainer = styled.div`
  padding: 12px 0 0;

  h2 {
    display: inline;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    text-transform: none;
  }
`;

export const BodyContainer = styled.div`
  padding: 12px;
  max-height: none;
`;
