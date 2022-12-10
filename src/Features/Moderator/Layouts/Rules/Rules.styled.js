import styled from "styled-components";

export const RuleTabContainer = styled.div`
  display: ${({ showRuleTabs }) => (showRuleTabs ? "none" : "inherit")};
`;
export const RulesContainer = styled.div`
  margin: 0 24px;
  overflow: hidden;
`;
