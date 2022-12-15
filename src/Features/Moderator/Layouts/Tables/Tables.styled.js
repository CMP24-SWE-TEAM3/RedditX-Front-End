import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.btnColor.text};
  border-radius: 4px;
  max-width: 1124px;
  /* max-width:1200px; */
  padding-bottom: 16px;
`;
export const HeaderTable = styled.div`
  padding-bottom: 16px;
`;
export const ButtonState = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: initial;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme, show }) =>
    show ? theme.btnColor.primary : theme.categoryColor.text};
  margin: 8px 0 0 16px;
  padding-bottom: 5px;
`;
export const Tab = styled.div`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.btnColor.primary};
  }
`;
