import styled, { css } from "styled-components";

// Import icons
import { CgArrowsExpandLeft } from "react-icons/cg";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";

export const Container = styled.div`
  padding: 8px 0 0 8px;
  display: flex;
  margin-bottom: 8px;
  /* margin-top: 20px; */
  height: fit-content;
  color: ${({ theme }) => theme.color.primary};
`;
export const Time = styled.div`
  color: ${({ theme }) => theme.color.muted};
  display: inline-flex;
  font-size: 12px;
`;

export const Body = styled.p``;

export const Left = styled.div`
  overflow: hidden;
  flex-shrink: 0;
`;
export const Right = styled.div`
  margin-left: 8px;
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.background.muted};
  border-radius: 2px;
  margin: auto;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.background.muted};
  border-color: ${({ theme }) => theme.background.muted};
  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary};
    cursor: pointer;
  }
`;
export const Image = styled.img`
  width: 35px;
  height: 35px;
`;

export const Username = styled.span`
  font-size: 12px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.color.muted};
  & > * {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.background.muted};
    }
    border-radius: 4px;
  }
`;

export const ExpandIcon = styled(CgArrowsExpandLeft)`
  &:hover {
    cursor: pointer;
  }
`;

export const VotesCount = styled.span`
  display: inline-block;
  margin-left: 8px;
  margin-right: 8px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

export const Reply = styled.span`
  display: inline-block;
  /* margin-left: 8px; */
  /* margin-right: 8px; */
  padding: 4px;
  span {
    margin-left: 2px;
  }
`;

export const UpvoteIcon = styled(TbArrowBigTop)`
  ${({ clicked }) =>
    clicked &&
    css`
      color: ${({ theme }) => theme.color.orange};
    `};
`;

export const DownvoteIcon = styled(TbArrowBigDown)`
  ${({ clicked }) =>
    clicked &&
    css`
      color: #7193ff;
    `};
`;
