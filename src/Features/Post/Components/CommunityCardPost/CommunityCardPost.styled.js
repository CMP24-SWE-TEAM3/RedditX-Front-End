import styled from "styled-components";

export const BackgroundImage = styled.img`
  width: 100%;
  height: 34px;
  object-fit: cover;
  top: 0;
  border-radius: 3px 3px 0 0;
  margin: -12px 0 10px;
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

export const Button = styled.button`
  position: relative;
  margin-bottom: 8px;
  background-color: ${({ but }) => (but === "1" ? "white" : "#0079d3")};
  color: ${({ but }) => (but === "1" ? "#0079d3" : "white")};
  justify-content: center;
  margin-top: 12px;
  border: 1px solid #0079d3;
  border-radius: 9999px;
  height: 30px;
  width: 100%;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;

  :hover {
    background-color: ${({ theme }) => theme.background.hoverLight};
  }
`;