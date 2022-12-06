import styled from "styled-components";
export const Flairone = styled.div`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  background-color: ${({ theme }) => theme.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  padding: 12px 16px;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
`;
export const FlaironeExact = styled.div`
  margin-left: 0;
  /* min-width: 400px; */
  flex: 0 0 auto;
`;
export const FlairStyle = styled.div`
  background-color: ${(props) => props.flairBackgroundColor};
  color: ${(props) => props.flairColor};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 5px;
  vertical-align: text-bottom;
  white-space: pre;
  word-break: normal;
  padding: 0 4px;
`;
export const FlairClassN = styled.div`
  font-family: Noto Mono, Menlo, Monaco, Consolas, monospace;
  /* font-size: 13px; */
  font-weight: 400;
  /* line-height: 20px; */
  font-size: 12px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* width: 144px; */
  flex: 0 0 auto;
  margin-left: 16px;
`;
export const FlairSettings = styled.div`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  overflow: hidden;
  white-space: nowrap;
  /* width: 280px; */
  flex: 0 0 auto;
  margin-left: 16px;
`;
export const Buttons = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  display: flex;
  /* flex: 1; */
  justify-content: flex-start;
  white-space: nowrap;
  margin-left: 16px;
`;
export const ButtonDel = styled.button`
  padding: 0;
  position: relative;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.link};
  fill: ${({ theme }) => theme.color.link};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  background: transparent;
  /* margin-left: 32px; */
  &:hover {
    background-color: #ededed;
  }
`;
export const ButtonDel2 = styled.button`
  padding: 0;
  position: relative;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.link};
  fill: ${({ theme }) => theme.color.link};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  background: transparent;
  margin-left: 32px;
  &:hover {
    background-color: #ededed;
  }
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    /* background: #ccc; */
    /* border-color: #ccc; */
    color: #666666;
    cursor: not-allowed;
  }
`;
export const ButtonDeleteAll = styled.button`
  margin-left: 32px;
  display: flex;
  align-items: center;
  padding: 0;
  position: relative;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.link};
  fill: ${({ theme }) => theme.color.link};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  background: transparent;
  border-radius: 9999px;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  width: auto;
  & span {
    font-size: 20px;
    color: ${({ theme }) => theme.borderColor.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #ededed;
  }
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    /* background: #ccc; */
    /* border-color: #ccc; */
    color: #666666;
    cursor: not-allowed;
  }
`;
export const IconSort = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.borderColor.primary};
`;
