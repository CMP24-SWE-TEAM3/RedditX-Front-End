import styled from "styled-components";

export const Container = styled.div`
  a {
    margin-bottom: 0;
    border-radius: 4px 4px 0 0;
    display: flex;
    flex-direction: column;
    margin-top: -1px;
    padding: 16px;
    color: inherit;
    text-decoration: inherit;
  }
`;
export const Item = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
export const Number = styled.span`
  color: ${({ theme }) => theme.color.primary};
  text-align: right;
  min-width: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
export const Caret = styled.span`
  color: rgb(70 209 96);
  font-size: 20px;
  font-weight: 400;
  vertical-align: middle;
  margin: 8px;
`;
export const Image = styled.img`
  border: none;
  background-color: #205493;
  font-size: 36px;
  height: 36px;
  max-height: 36px;
  max-width: 36px;
  overflow: hidden;
  width: 36px;
  line-height: normal;
  flex-shrink: 0;
  border-radius: 100%;
  vertical-align: middle;
`;
export const CommunityNameContainer = styled.div`
  flex-grow: 1;
  padding: 0 8px;
  overflow: hidden;
  overflow-wrap: break-word;
`;
export const CommunityNameChild = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;

  h6 {
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.primary};
    font-weight: 700;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    :hover {
      text-decoration: none;
    }
  }
`;
export const JoinBtn = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.color.secondary};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.background.primary};
  fill: ${({ theme }) => theme.color.secondary};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  height: 24px;
  width: 56px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  flex-shrink: 0;
  outline: none;
  :hover {
    background-color: ${({ theme }) =>
      theme.background.hover_background_button_blue};
  }
`;
export const JoinContainer = styled.div`
  flex-shrink: 0;
  border: none;
`;
export const HeaderLine = styled.hr
`
  margin: 0.1rem 0;
  opacity: .1 ;
`