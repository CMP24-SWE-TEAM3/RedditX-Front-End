import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const PostTitle = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};
  text-align: left;
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: -5px;
`;
