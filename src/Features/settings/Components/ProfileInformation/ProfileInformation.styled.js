import styled from "styled-components";

export const Header = styled.h3`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.color.muted};
  margin-bottom: 32px;
  padding-bottom: 6px;
`;
