import styled from "styled-components";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

export const MessageWithAu = styled.div`
  padding-left: 35px;
`;

export const ArrowUp = styled(GoArrowUp)`
  transition: 0.3s;
  color: ${({ theme }) => theme.arrowColor.arrow};
  margin: 2px 0 -12px 0;
  width: 100%;
  height: 30px;
  display: block;
  cursor: pointer;
  width: 15px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  &.active {
    color: ${({ theme }) => theme.arrowColor.upvoted};
  }
`;

export const ArrowsDiv = styled.div`
  float: left;
  margin-right: 7px;
  margin-left: 7px;
  background: transparent;
  overflow: hidden;
`;
export const ArrowDown = styled(GoArrowDown)`
  color: ${({ theme }) => theme.arrowColor.arrow};
  margin: 2px 0 0 0;
  width: 100%;
  height: 30px;
  display: block;
  cursor: pointer;
  width: 15px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  transition: 0.3s;
  &.active {
    color: ${({ theme }) => theme.arrowColor.downvoted};
  }
`;

export const OddItems = styled.div`
  transition: 0.3s;
  /* background-color: ${({ theme }) => theme.background.lightMuted}; */
  margin: 0;
  padding: 10px 15px;
  /* &.even {
    background-color: ${({ theme }) => theme.background.primary};
  } */

  &:nth-child(odd){
    background-color: ${({ theme }) => theme.background.lightMuted};
  }

  &:nth-child(even){
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

export const MessagesWithBtns = styled.div`
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
  margin-left: 10px;
  border-left: 2px dashed ${({ theme }) => theme.color.initialBorderColor};
  padding-bottom: 10px;
  width: 100%;
  &.expanded {
    display: inline-block;
  }
  &.collapsed {
    display: none;
  }
`;
export const Visted = styled.div`
  &.read-before {
    background-color: ${({ theme }) => theme.lineColor.primary};
    border-color: ${({ theme }) => theme.lineColor.primary};
    color: ${({ theme }) => theme.color.primary};
    transition: 0.3s;
    width: 100%;
  }
`;

export const AreYouSure = styled.div`
  display: none;
  &.active {
    display: inline;
  }
`;

export const BtnWarning = styled.span`
  font-size: x-small;
  color: red;
`;

export const ToggleExpan = styled.a`
  text-decoration: none;
  margin-right: 3px;
  color: ${({ theme }) => theme.color.frame};
  transition: 0.3s;
  cursor: pointer;
`;

export const Msg = styled.div`
  display: block;
  margin: 5px 0 5px 15px;
  line-height: 1.5em;
  font-size: 0.9rem;
  font-weight: 400;
  max-width: 60em;
`;

export const ListBtns = styled.ul`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  list-style: none;
  padding-left: 0;
`;

export const Btns = styled.li`
  display: inline-block;
  border: none;
  padding-right: 4px;
  padding-left: 4px;
  line-height: 1.6em;
  display: inline;
  white-space: nowrap;
`;

export const BtnsLinks = styled.a`
  color: #888;
  font-weight: bold;
  padding: 0 1px;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  line-height: 1.6em;
  &.active {
    display: none;
  }
  &:hover {
    color: #888;
    text-decoration: underline;
  }
`;

export const Subject = styled.div`
  margin-bottom: calc(0.5em + 10px);
  font-weight: bold;
  font-size: larger;
`;

export const SubjectText = styled.span`
  font-weight: bold;
  font-size: larger;
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
`;

export const Tagline = styled.p`
  width: 100%;
  margin-bottom: 5px;
  padding-left: 14px;
  float: left;
  color: ${({ theme }) => theme.borderColor.primary};
  transition: 0.3s;
  font-weight: inherit;
`;

export const TimeTag = styled(Tagline)`
  display: inline;
  float: none;
  margin: 0 5px;
  &.active &::before {
    content: " [A]";
    margin: 0 5px;
    color: #ff0011;
  }
`;

export const Author = styled.a`
  margin-right: -15px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.frame};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.frame};
    text-decoration: underline;
  }
  &.admin {
    color: #ff0011;
  }

  &::before {
    content: "/u/";
  }
`;
export const Expand = styled.a`
  margin-right: 3px;
  display: none;
`;

export const MessageDetails = styled.div`
  padding: 10px 15px;
`;
