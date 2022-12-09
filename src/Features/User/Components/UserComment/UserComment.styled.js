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

  :hover{
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
