import styled from "styled-components";
import { Accordion } from "react-bootstrap";

export const RuleTabContainer = styled(Accordion)`
  display: ${({ showRuleTabs }) => (showRuleTabs ? "none" : "inherit")};
`;
export const RulesContainer= styled.div
`
    margin:0 24px;
  overflow: hidden;
`