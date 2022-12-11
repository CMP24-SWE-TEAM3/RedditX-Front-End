import styled from "styled-components";

export const OddItems = styled.div`
  background-color: ${({ theme }) => theme.background.lightMuted};
  transition: 0.3s;
  margin: 0;
  padding: 10px 15px;
  &.even {
    background-color: ${({ theme }) => theme.background.primary};
  }
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
  margin-top: 9px;
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
  color: ${({ theme }) => theme.lineColor.frame};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.lineColor.frame};
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
export const Visted = styled.div`
  &.read-before {
    background-color: ${({ theme }) => theme.lineColor.primary};
    border-color: ${({ theme }) => theme.lineColor.primary};
    color: ${({ theme }) => theme.color.primary};
    width: 100%;
    transition: 0.3s;
  }
`;
