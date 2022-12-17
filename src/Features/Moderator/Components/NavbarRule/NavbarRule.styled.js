import styled from "styled-components";
export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.lineColor.primary};
  display: flex;
  flex-direction: row;
  height: 48px;
  justify-content: flex-end;
  left: 280px;
  padding: 0 24px;
  position: fixed;
  right: 0;
  z-index: 3;
  @media (max-width: 568px) {
    left: 0;
    display: flex;
    justify-content: space-between;
  }
`;
export const ReorderBtn = styled.button`
  position: relative;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  position: relative;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.btnColor.primary};
  fill: ${({ theme }) => theme.btnColor.primary};
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: ${({ showReorder }) => (showReorder ? "none" : "flex")};
  justify-content: center;
  text-align: center;
  width: auto;
  outline: none;
  margin-right: 5px;
  :hover {
    background-color: ${({ theme }) => theme.borderColor.secondary};
  }
`;
export const AddRuleBtn = styled.button`
  position: relative;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  position: relative;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.btnColor.primary};
  color: ${({ theme }) => theme.color.baseButtonColor};
  fill: ${({ theme }) => theme.color.baseButtonColor};
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: ${({ showReorder }) => (showReorder ? "none" : "flex")};
  justify-content: center;
  text-align: center;
  width: auto;
  outline: none;
  :hover {
    background-color: ${({ theme }) =>
      theme.background.hover_background_button_blue};
  }
`;
export const CancelBtn = styled.button`
  position: relative;
  border: 1px solid ${({ theme }) => theme.btnColor.primary};
  color: ${({ theme }) => theme.btnColor.primary};
  fill: ${({ theme }) => theme.btnColor.primary};
  font-family: Noto Sans, Arial, sans-serif;
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
  display: ${({ showReorder }) => (showReorder ? "flex" : "none")};
  justify-content: center;
  text-align: center;
  width: auto;
  :hover {
    background-color: ${({ theme }) => theme.background.post_background};
  }
`;
export const SaveBtn = styled.button`
  margin-left: 8px;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  position: relative;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.btnColor.primary};
  color: ${({ theme }) => theme.color.baseButtonColor};
  fill: ${({ theme }) => theme.color.baseButtonColor};
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: ${({ showReorder }) => (showReorder ? "flex" : "none")};
  justify-content: center;
  text-align: center;
  width: auto;
  outline: none;
  :hover {
    background-color: ${({ theme }) =>
      theme.background.hover_background_button_blue};
  }
`;
