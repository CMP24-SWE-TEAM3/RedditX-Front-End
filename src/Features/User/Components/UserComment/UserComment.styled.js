import styled from "styled-components";
import { Link } from "react-router-dom";

export const CommentHeaderContainer = styled.div`
  border: solid ${({ theme }) => theme.lineColor.primary};
  border-width: 1px 1px 0;
  margin-bottom: 0;
  margin-top: 4px;
  padding: 1px 1px 2px;
  overflow: hidden;
  background-color: #ffffffcc /*rgba(255, 255, 255, 0.8)*/;
  color: ${({ theme }) => theme.borderColor.primary};
  position: relative;

  :hover {
    border: 1px solid ${({ theme }) => theme.color.titleText_of_link};
  }
`;

export const CommentHeaderInnerContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  padding: 0 8px;
`;

export const CommentHeaderContent = styled.div`
  align-items: center;
  display: flex;
  padding: 8px 0;

  span.icon {
    flex: 0 0 20px;
    font-size: 20px;
    margin-right: 8px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    width: 20px;
  }
`;

export const CommentHeaderInfo = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  flex: 1 1 auto;
`;

export const UserLink = styled(Link)`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.secondary};
  text-decoration: none;
`;

export const PostTitleLink = styled(Link)`
  color: ${({ theme }) => theme.color.titleText_of_link};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
`;

export const Dot = styled.span`
  line-height: 16px;
  vertical-align: middle;
  font-size: 6px;
  margin: 0 4px;
`;

export const CommentHeaderRoot = styled.div`
  font-size: 12px;
  font-weight: 400;
  display: inline;
`;

export const CommunityLink = styled(Link)`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
  display: inline;
  line-height: 20px;
  text-decoration: none;
  vertical-align: baseline;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;

export const PostedLink = styled(Link)`
  margin-right: 3px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.borderColor.primary};

  &:hover {
    color: ${({ theme }) => theme.borderColor.primary};
  }
`;

export const CommentBodyContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  &:hover {
    border-top: 1px solid ${({ theme }) => theme.color.titleText_of_link};
    border-right: 1px solid ${({ theme }) => theme.color.titleText_of_link};
    border-left: 1px solid ${({ theme }) => theme.color.titleText_of_link};
  }
  margin-bottom: 6px;
`;

export const CommentBodyInnerContainer = styled.div`
  padding: 0 8px;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  border-left: 1px solid ${({ theme }) => theme.lineColor.primary};
  border-right: 1px solid ${({ theme }) => theme.lineColor.primary};
`;

export const CommentBodyContent = styled.div`
  border-top: none;
  align-items: stretch;
  display: flex;
  padding: 8px 0 8px 8px;
  padding-top: 10px;
`;

export const DashedLine = styled.div`
  border-left: 1px dashed ${({ theme }) => theme.lineColor.primary};
  flex: 0 0 1px;
  margin-right: 16px;
`;

export const CommentBodyInfoContainer = styled.div`
  flex: 1 1 auto;
  margin-bottom: -4px;
  background-color: ${({ theme, overview }) =>
    overview ? theme.background.comment_overview_background : ""};
  padding: 3px 6px;
  border-radius: 4px;
`;

export const CommentBodyInfoInnerContainer = styled.div`
  max-width: none;
  width: 100%;
`;

export const CommentedContainer = styled.div`
  min-height: 16px;
  margin-left: 0;
`;

export const CommentedLink = styled(Link)`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;

export const Point = styled.span`
  flex: 0 0 auto;
  padding-left: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
`;

export const DaysLink = styled(Link)`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
  flex: 0 0 auto;
  padding-left: 4px;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.color.muted};
  }
`;

export const CommentContainer = styled.div`
  padding: 2px 0;
  width: 100%;
`;

export const CommentInnerContainer = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  word-break: break-word;
  overflow: auto;
  padding-bottom: 1px;
  margin-bottom: -1px;
  color: ${({ theme }) => theme.color.primary};

  p {
    padding: 0;
    margin: 0;
  }
`;

export const ReplyShareContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({ theme }) => theme.borderColor.primary};
  margin-left: -4px;
`;

export const ReplyShareButton = styled.button`
  display: inline-block;
  margin: 4px;
  transition: color 0.1s;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: initial;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;

export const ThreeDotsButton = styled.button`
  border-radius: 2px;
  height: 24px;
  cursor: pointer;
  padding: 0 4px;
  background: transparent;
  border: none;
  color: inherit;

  span.icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
    color: ${({ theme }) => theme.borderColor.primary};
  }

  &:hover {
    background-color: rgba(26, 27, 27, 0.1);
    outline: none;
  }
`;

export const StyledCommentLink = styled(Link)`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
`;
