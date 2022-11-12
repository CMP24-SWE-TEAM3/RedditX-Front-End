// Import styled
import styled from "styled-components";

// Main container for the post guidelines component
export const Container = styled.div`
  margin-top: 15px;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 12px;
  margin-top: 12px;
  border-radius: 4px;
  width: 312px;

  tr {
    color: ${({ theme }) => theme.color.primary};
  }
`;

// Data item for the post guidelines table
export const TableData = styled.td`
  font-size: 14px;
  font-weight: 500;
`;

// Header item for the post guidelines table
export const TableHeader = styled.th`
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  width: 100%;
`;

// Image (logo) for the post guidelines component
export const PostLogo = styled.img`
  height: 40px;
  margin-right: 8px;
  padding-bottom: 5px;
  width: 40px;
`;
