import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlairContainer = styled.div`
  overflow: hidden;
  margin-bottom: 5px;
  transition: max-height 0.3s ease-out;
`;

export const UList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline-block;
  max-width: 97%;
  padding-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
  margin-right: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 20px;
  font-size: 14px;
  padding: 7px 12px;
  display: inline-block;
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: text-bottom;
  white-space: pre;
  word-break: normal;
  margin-left: 0;
  font-weight: 500;
  line-height: 16px;
  max-width: 100%;
`;

export const SeeMoreBtn = styled.button`
  border: none;
  position: relative;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.secondary};
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  min-height: 32px;
  min-width: 32px;
  text-align: center;
  border-radius: 20px;
  background-color: transparent;

  :hover,
  :focus {
    background-color: #ececec;
  }
`;
