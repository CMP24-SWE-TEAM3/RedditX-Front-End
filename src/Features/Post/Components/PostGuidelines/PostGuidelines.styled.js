// Import styled
import styled from "styled-components";

// Main container for the post guidelines component
export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
  padding: 12px;
  border-radius: 4px;
`;

// Data item for the post guidelines table
export const TableData = styled.td`
  font-size: 16px;
  font-weight: 500;
`;

// Header item for the post guidelines table
export const TableHeader = styled.th`
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
`;

// Image (logo) for the post guidelines component
export const PostLogo = styled.img`
  height: 40px;
  margin-right: 8px;
  padding-bottom: 5px;
  width: 40px;
`;
