import styled from "styled-components";


export const CommunityBanner = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 3px 3px 0 0;
  color: ${({ theme }) => theme.background.primary};
  display: flex;
  padding: 0 12px 12px;
  height: 34px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  color: #1a1a1b;
  fill: #1a1a1b;
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  border-radius: 4px;
  overflow: visible;
  word-wrap: break-word;
  width: 312px;
  color: ${({ theme }) => theme.color.primary};
`;

export const Content = styled.div`
  max-height: none;
  padding: 12px;
`;

export const Separator = styled.hr`
  background-color: rgba(26, 26, 27, 0.07);
  border: none;
  height: 1px;
  margin: 16px 0;
  background-color: ${({ theme }) => theme.lineColor.primary};
  opacity: 1;
`;
