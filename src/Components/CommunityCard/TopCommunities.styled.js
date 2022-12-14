import styled from "styled-components";
export const CommunityContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  border: thin solid ${({ theme }) => theme.lineColor.primary};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  margin-bottom: 16px;
  max-width: 100%;
  padding: 12px;
  & .title {
    color: ${({ theme }) => theme.color.titleText_of_link};

    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.muted};
    padding-bottom: 8px;
  }

  & .more {
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.color.link};
    padding: 16px;
    font-weight: 700;
  }
  & .more a {
    font-weight: 500;
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
    padding: 0;
  }
  h6,
  a,
  h4,
  p {
    margin: 0;
    padding: 0;
  }
`;
