import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flair } from "../UserFlairPreview/UserFlairPreview.styled";

export const Message = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  text-align: center;
  width: auto;
  border-radius: 50px;
  box-sizing: border-box;

  :hover {
    background-color: #f4f9fd;
  }

  span.icon {
    margin-right: 4px;
    margin-left: -2px;
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 17px;
    width: 20px;
    flex: 0 0 auto;
  }
`;

export const ModeratorContainer = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  display: flex;
  margin-bottom: 16px;
  width: 100%;
  a {
    text-decoration: none;
  }
`;

export const User = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  display: inline-block;
  max-width: 100%;
`;

export const ModeratorFlair = styled(Flair)`
  font-weight: 500;
  margin-left: 4px;
`;

export const ViewModeratorsContainer = styled.div`
  display: flex;
  overflow: hidden;
  padding: 0 12px 12px;
`;

export const ViewAllModeratorsLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondary};
  margin-left: auto;
  line-height: 16px;
`;
