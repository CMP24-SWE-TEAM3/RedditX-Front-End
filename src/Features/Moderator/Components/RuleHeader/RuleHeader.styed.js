import styled from "styled-components";

export const RuleContainer = styled.div`
  padding-top: 64px;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  @media (min-width: 640px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;
export const HeaderRule = styled.div`
  padding: 8px 0 16px;
  :first-child {
    padding-bottom: 8px;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: ${({ theme }) => theme.categoryColor.text};
  }
`;
export const Danger = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.btnColor.primary};
`;
export const Note = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.categoryColor.text};
  display: ${({ show }) => (show ? "none" : "inherit")};
`;
