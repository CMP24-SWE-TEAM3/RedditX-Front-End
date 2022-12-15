import styled from "styled-components";
import { Link } from "react-router-dom";
export const Heading = styled.div`
  width: 100%;
`;
export const Center = styled.div`
  max-width: 976px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  @media (min-width: 960px) and (max-width: 1099px) {
    max-width: 640px;
  }
  @media (max-width: 960px) {
    padding: 0 24px;
  }
`;
export const HeadingContentLayout = styled.div`
  padding: 16px 0;
`;
export const HeadingHeader = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: ${({ theme }) => theme.color.titleText_of_link};
  padding: 4px 0 8px;
`;
export const SubLinks = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
`;
export const SubLinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: inline;
  list-style: none;
`;
export const SubLinksListElement = styled.li`
  margin: 0;
  padding: 0;
  display: inline;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.link};
  }
  &::after {
    content: ${(props) => (props.last ? " " : ", ")};
  }
`;
// export const SubLinksListElementLink = styled(Link)`
//   text-decoration: none;
//   color: ${({ theme }) => theme.color.link};
// `;
