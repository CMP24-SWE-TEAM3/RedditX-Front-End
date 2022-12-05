import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  padding-left: 24px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  position: fixed;
  z-index: 30;
  top: 48px;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-right: 4px;
  text-decoration: none;
  margin-left: 8px;
  color: ${({ theme }) => theme.color.link};
`;
