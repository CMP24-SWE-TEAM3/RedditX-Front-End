import styled from "styled-components";

export const TopBtn = styled.button`
  display: inline-flex;
  position: relative;
  width: 68.66px;
  border: none;
  height: 32px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  padding: 6px 8px;
  margin: auto 10px auto 3px;
  border-radius: 1.5em;
  background-color: ${({ theme, clickedBtn }) =>
    clickedBtn === "4"
      ? theme.background.post_background
      : theme.background.primary};
  color: ${({ theme, clickedBtn }) =>
    clickedBtn === "4" ? theme.btnColor.primary : theme.color.muted};

  :hover {
    background-color: ${({ theme }) => theme.background.muted};
  }
  @media (max-width: 1010px) {
    display: none;
  }
`;

export const Word = styled.span`
  padding-left: 6px;
  font-weight: 700;
`;
