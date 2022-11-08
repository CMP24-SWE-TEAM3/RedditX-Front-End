// Import styled
import styled from "styled-components";

// Main container for the sidebar
export const Container = styled.div`
  margin-left: 24px;
  margin-top: 25px;
  display: block;
  width: 360px;

  /* Disappear when width is less than 960px */
  @media (max-width: 960px) {
    display: none;
  }
`;

// Footer for the sidebar
export const Footer = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
  margin: 10px auto 10px 0;
  max-width: 250px;
  a {
    color: ${({ theme }) => theme.color.link};
    text-decoration: none;
  }
`;

// Footer for the sidebar
export const CommunityCardContainer = styled.div`
  width: 312px;
`;
