import styled from "styled-components";
export const ContainerFlairButtons = styled.div`
  min-width: 400px;
  white-space: nowrap;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 48px;
  background-color: ${({ theme }) => theme.lineColor.primary};
  justify-content: flex-end;
  left: 280px;
  padding: 0 24px;
  position: fixed;
  right: 0;
  z-index: 3;
`;
export const ReorderButton = styled.button`
  margin-left: 8px;
  min-width: 100px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.link};
  color: ${({ theme }) => theme.color.link};
  fill: ${({ theme }) => theme.color.link};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  background: transparent;
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    /* background: #ccc; */
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
export const AddFlairButton = styled.button`
  margin-left: 8px;
  min-width: 100px;
  position: relative;
  border: none;
  background-color: ${({ theme }) => theme.color.link};
  color: ${({ theme }) => theme.background.primary};
  fill: ${({ theme }) => theme.background.primary};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    background: #ccc;
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }
  /* background: transparent; */
`;
