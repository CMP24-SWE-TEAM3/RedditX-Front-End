import styled from "styled-components";

export const RuleTabContainer = styled.div`
  display: ${({ showRuleTabs }) => (showRuleTabs ? "none" : "inherit")};
`;
