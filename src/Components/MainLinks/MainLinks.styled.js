import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  a {
    text-decoration: none;
  }
  & a.active div {
    border-bottom: 3px solid ${({ theme }) => theme.btnColor.primary};
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
`;
export const Tab = styled.div`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  line-height: unset;
  margin-right: 8px;
  padding: 15px 12px 12px;
  color: ${({ theme }) => theme.color.muted};
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.btnColor.primary};
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
  &:hover {
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
`;
