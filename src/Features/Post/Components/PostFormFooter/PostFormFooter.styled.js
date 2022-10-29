// Import styled
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.background.lightMuted};
  width: 100%;
  padding: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary};
  border-radius: 0 0 6px 6px;
  accent-color: red;
  a {
    color: ${({ theme }) => theme.color.link};
    text-decoration: none;
    margin-right: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
  input:checked {
    background-color: ${({ theme }) => theme.color.link};
  }
`;
