import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledImg = styled.img`
  background-color: #a8a8a8;
  border-radius: 100%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
`;

export const StyledHeader = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.color.primary};
  margin-top: 32px;
  margin-bottom: 20px;
`;

export const StyledText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  line-height: 18px;
  margin-top: 0;
  margin-bottom: 32px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: baseline;
`;

export const StyledButton = styled.button`
  margin-top: 12px;
  width: auto;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  fill: ${({ theme }) => theme.color.secondary};
  font-family: " Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 99px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  background: transparent;
  :hover {
    background: #d0dbe5;
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  color: ${({ theme }) => theme.background.primary};
  fill: ${({ theme }) => theme.background.primary};
  display: block;
  padding: 0 16px;
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 32px;
  text-transform: uppercase;
  margin-top: 12px;
  margin-left: 8px;
  min-width: 104px;
  width: auto;
  text-decoration: none;
  border-radius: 99px;
  box-sizing: border-box;
  text-align: center;
  min-height: 32px;

  :hover {
    background-color: ${({ theme }) =>
      theme.background.hover_background_button_blue};
    color: ${({ theme }) => theme.background.primary};
  }
`;
