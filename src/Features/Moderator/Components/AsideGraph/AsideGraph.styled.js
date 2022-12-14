import styled from "styled-components";

export const AsideContent = styled.div`
  flex: 0 0;
  :first-child {
    width: 120px;
  }
`;
export const JoinedBtn = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 6px;
`;
export const JoinedCointainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const ChildContainer = styled.div`
  flex: 0 0;
  margin-right: 0;
`;
export const Content = styled.div`
  background-color: ${({ colorText }) =>
    colorText ? "rgb(0, 121, 211)" : "rgb(255, 176, 0)"};
  border: 2px solid
    ${({ colorText }) => (colorText ? "rgb(0, 121, 211)" : "rgb(255, 176, 0)")};
  border-radius: 2px;
  height: 12px;
  margin-right: 5px;
  width: 12px;
`;
export const TextContainer = styled.div`
  flex: 1 1 100%;
  overflow: hidden;
  width: 100%;
`;
export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.categoryColor.text};
  font-family: IBMPlexSans, Arial, sans-serif;
`;
