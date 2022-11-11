import styled from "styled-components";

export const HeaderMarginDiv = styled.div`
  background-color: ${({theme})=>theme.background.primary};
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  transition: 0.3s;
`;


export const HeaderDiv = styled.div`
  position: relative;
  min-height: 96px;
  width: 100%;
  max-width: 1200px;
  background-color: ${({theme})=>theme.background.primary};
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 24px;
  padding: 0 16px;
  
  overflow-wrap: break-word;
`;
export const HeaderH3 = styled.h3`
  color: ${({theme})=>theme.color.primary};
  transition: 0.3s;
  padding-bottom: 6px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  margin: 0;
`;
export const HeaderP = styled.p`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({theme})=>theme.color.muted};
  transition: 0.3s;
  margin: 0;
`;
