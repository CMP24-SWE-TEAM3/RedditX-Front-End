import styled from "styled-components";

export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
  margin-bottom: 40px;

  span {
    color: ${({ theme }) => theme.color.primary};
  }
  a {
    text-decoration: none;
  }
`;
