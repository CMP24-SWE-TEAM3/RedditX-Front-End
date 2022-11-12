import styled from "styled-components";
export const Footer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
  display: flex;
  span.comment,
  span.upvote {
    display: block;
    margin-right: 12px;
  }
`;
