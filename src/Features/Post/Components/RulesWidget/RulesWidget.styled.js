import styled from "styled-components";

export const RuleContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  ${(props) =>
    props.last ? "" : "border-bottom: 1px solid rgba(26, 26, 27, 0.07);"}
  ${(props) => (props.last ? "padding: 8px 0 0 0;" : "padding: 8px 0;")}
  cursor: ${(props) => (props.desc ? "pointer" : "default")};
`;

export const RuleFex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Number = styled.div`
  box-sizing: border-box;
  flex: 0 0;
  padding-right: 2px;
`;

export const Title = styled.div`
  box-sizing: border-box;
  flex: 1 1 100%;
  width: 100%;
  padding-right: 8px;
  word-break: break-word;
`;

export const Arrow = styled.div`
  flex: 0 0;
  span.icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
  }
`;

export const Description = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  padding: 8px 8px 0 16px;

  div {
    line-height: 21px;
  }

  p {
    font-size: 14px;
    line-height: 21px;
    word-break: break-word;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;
