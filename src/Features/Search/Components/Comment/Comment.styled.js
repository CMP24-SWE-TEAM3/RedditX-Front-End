import styled from "styled-components";
export const Container = styled.div`
  cursor: pointer;
  color: rgb(135, 138, 140);
  overflow: hidden;
  position: relative;
  border: thin solid var(--newRedditTheme-postLine);
  margin-top: -1px;
  max-width: 100%;
  border: thin solid ${({ theme }) => theme.lineColor.PostBorder};
  &:hover {
    border: thin solid ${({ theme }) => theme.lineColor.PostHoverBorder};
  }
  background-color: ${({ theme }) => theme.background.primary};
`;
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
