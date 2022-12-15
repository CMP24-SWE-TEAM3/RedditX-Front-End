import styled from "styled-components";
export const Header = styled.span`
  align-items: center;
  display: flex;
`;
export const State = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.categoryColor.text};
  margin-bottom: 16px;
`;
export const Update = styled.span`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 12px;
  padding-left: 4px;
`;
