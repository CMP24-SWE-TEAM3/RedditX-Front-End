import Tooltip from "react-bootstrap/Tooltip";
import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lineColor.primary};
  margin-top: 16px;
  padding-top: 16px;
`;
export const StyledTooltip = styled(Tooltip)`
  opacity: 1;
  .tooltip-arrow::before,
  .bs-tooltip-top .tooltip-arrow::before {
    border-top-color: ${({ theme }) => theme.color.secondary};
  }
  div.tooltip-inner {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;
export const CommunityTopic = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
  span.new {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    color: #ff4500;
    text-transform: uppercase;
    margin-right: 4px;
  }

  span.topic-icon {
    transition: all 0.1s linear 0s;
    margin-bottom: 1px;
    margin-left: 4px;
    color: ${({ theme }) => theme.borderColor.primary};
    vertical-align: middle;
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 16px;
  }
  span.topic-icon:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const AddTopic = styled.div`
  position: relative;
`;

export const AddTopicBtn = styled.button`
  position: relative;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.secondary};
  align-items: center;
  border-radius: 4px;
  display: flex;
  width: 100%;

  :focus-visible {
    outline: 3px black highlight; /*focus-ring-color*/
  }

  span.icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 16px;
    vertical-align: middle;
    width: 20px;
  }
`;

export const DropDown = styled.div`
  display: block; /*${(props) => (props.displayBlock ? "block" : "none")};*/
  max-height: 198px;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 4px;
  min-width: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.color.primary};
  box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);

  button.active {
    color: ${({ theme }) => theme.color.secondary};
    :hover {
      color: ${({ theme }) => theme.background.primary};
      background-color: ${({ theme }) => theme.color.secondary};
      outline: none;
    }
  }
`;
export const DropDownBtn = styled.button`
  color: ${({ theme }) => theme.color.primary}; /*${(props) =>
    props.selected ? "#0079d3" : "#1c1c1c"};*/
  width: 100%;
  font-size: 14px;
  font-weight: ${(props) => props.weight};
  line-height: 18px;
  display: ${(props) => (props.selected ? "flex" : "block")};
  padding: 8px;
  text-transform: capitalize;
  white-space: nowrap;
  align-items: center;
  flex-direction: row;
  text-align: left;
  background: transparent;
  border: none;
  justify-content: space-between;

  :hover {
    color: ${({ theme }) => theme.background.primary};
    background-color: ${({ theme }) => theme.color.secondary};
    outline: none;
  }

  span.icon {
    height: 16px;
    width: 16px;
    color: ${({ theme }) => theme.color.secondary};
    margin-left: auto;
    overflow: hidden;
  }
`;

export const AddSubTopicContainer = styled.div`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.lineColor.primary};

  :focus-within {
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }
`;

export const AddSubTopic = styled.div`
  margin-left: 8px;
  margin-top: 8px;
  padding: 2px 12px 2px 6px;
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background-color: ${({ theme }) => theme.button.muted};
  border-radius: 12px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
  display: inline-block;
  margin-bottom: 8px;
  margin-right: 4px;
  text-align: center;
  max-width: 245px;

  :hover {
    background-color: #e7e7e7;
  }

  span.icon {
    vertical-align: middle;
    height: 22px;
    width: 22px;
    margin-right: 6px;
    margin-bottom: 1px;
    display: inline-flex;
    align-items: center;
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.color.secondary};
    cursor: pointer;
    text-align: center;
    fill: ${({ theme }) => theme.color.secondary};
  }
`;

export const InputSubTopic = styled.div`
  width: 100%;
`;

export const InputSubTopicContainer = styled.div`
  transition: all 0.1s linear 0s;
  border: none;
  padding: 8px 8px 0;
  position: relative;
  user-select: none;
  border-radius: 4px;

  input {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${({ theme }) => theme.color.primary};
    display: inline-block;
    background-color: transparent;
    margin: 2px 8px 10px 0;
    border: none;

    :focus {
      outline: none;
    }
  }
`;

export const SuggestedTopicsContainer = styled.div`
  margin-top: 25px;
  left: -9px;
  position: absolute;
  overflow: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  width: calc(100% + 32px);
  border-radius: 4px;
  border-top-width: 0;
  border-bottom-width: 0;
  box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
  background-color: ${({ theme }) => theme.background.primary};
  border-color: ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.color.primary};
  z-index: 1;

  .suggested-container {
    max-height: 260px;
    overflow: visible;
  }

  h3 {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
    padding: 12px 16px;
    color: ${({ theme }) => theme.color.muted};
  }

  div.add {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    cursor: pointer;
    padding: 4px 16px;
    user-select: none;
  }

  span {
    color: ${({ theme }) => theme.color.muted};
  }

  div.add:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    color: white;

    span {
      color: white;
    }
  }
`;

export const NumOfSubTopics = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  display: flex;
  padding: 4px 6px;
  color: ${({ theme }) => theme.color.muted};
`;

export const NoSubTopics = styled.span`
  display: inline;
`;

export const Cancel = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
  align-self: flex-end;
  user-select: none;
  margin-right: 8px;
  margin-left: auto;
  color: red;
`;

export const Save = styled.span`
  color: ${({ theme }) => theme.color.secondary};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
  align-self: flex-end;
  user-select: none;
`;

export const SubtopicsContainer = styled.div`
  transition: all 0.1s linear 0s;
  border: none;
  padding: 8px 8px 0;
  position: relative;
  user-select: none;
  border-radius: 4px;

  span.icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
  }

  input {
    ${(props) => (props.focus ? "width:186px;" : "width: 1px;cursor: default;")}

    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${({ theme }) => theme.color.primary};
    display: inline-block;
    background-color: transparent;
    margin: 2px 8px 10px 0;
    border: none;
    outline: none;
    padding: 0;
  }
`;

export const ItemContainer = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background-color: ${({ theme }) => theme.button.muted};
  border-radius: 12px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
  display: inline-block;
  margin-bottom: 8px;
  margin-right: 4px;
  padding: 2px 10px;
  text-align: center;
  max-width: 245px;

  :hover {
    background-color: ${({ focus, theme }) =>
      focus ? theme.color.secondary : "rgba(26, 26, 27, 0.1)"};
    color: ${({ focus, theme }) =>
      focus ? theme.background.primary : theme.color.secondary};
  }

  span.icon {
    vertical-align: middle;
    height: 5px;
    width: 5px;
    margin-left: 6px;
    color: ${({ theme }) => theme.borderColor.primary};
    line-height: 10px;
    font-size: 14px;
  }
  span.icon:hover {
    color: ${({ theme }) => theme.background.primary};
  }
`;
export const TopicsBlockHandle = styled.div`
  position: relative;
`;

export const PlusSpan = styled.span`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
  margin-bottom: 8px;
  margin-right: 4px;
`;
