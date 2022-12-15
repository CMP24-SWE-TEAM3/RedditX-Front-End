import styled from "styled-components";

export const Container = styled.div`
  border-radius: 9px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 25%), 0 4px 8px rgb(0 0 0 / 10%);
  margin-top: 10px;
  padding: 16px;
  width: 305px;
  position: absolute;
  transform: translate(0, calc(50% + 41px));
  /* top: 120px; */
  right: -24px;
  z-index: 30;
  background-color: ${({ theme }) => theme.background.primary};
`;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  img {
    margin-bottom: 12px;
    width: 64px !important;
    height: 100% !important;
  }
  h3 {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
  h4 {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const LastActions = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lineColor.primary};
  margin-top: 16px;
  text-align: left;
  width: 100%;
  h5 {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    margin-bottom: 12px;
    margin-top: 16px;
  }
`;
