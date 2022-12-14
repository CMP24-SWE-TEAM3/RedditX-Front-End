import styled from "styled-components";
import web from "Assets/Images/banner-background.png";

export const CommunityContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  border: thin solid ${({ theme }) => theme.lineColor.primary};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  margin-bottom: 16px;
  width: 310px;

  a {
    text-decoration: none;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    bottom: 8px;
    color: ${({ theme }) => theme.color.baseButtonColor};
    left: 16px;
    position: absolute;
  }

  h2 a {
    color: ${({ theme }) => theme.color.baseButtonColor};
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

export const ViewAllBtn = styled.div`
  padding: 12px;

  button {
    color: ${({ theme }) => theme.background.primary};
    border-color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.color.secondary};
    width: 95%;
    height: 32px;
    position: relative;
    border: none;
    justify-content: center;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    margin-bottom: 10px;
    outline: none;

    :hover,
    :active {
      background-color: ${({ theme }) =>
        theme.background.hover_background_button_blue};
    }
  }
`;
export const RowBtn = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  padding: 0 8px 12px;
`;
export const SubBtn = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.background.post_background};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.secondary};
  fill: ${({ theme }) => theme.color.secondary};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  text-transform: unset;
  height: 24px;
  margin: 4px;
  text-align: center;
  width: fit-content;
  border-radius: 9999px;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.lineColor.primary};
  }
`;
export const CoverCommunity = styled.div`
  color: ${({ theme }) => theme.color.secondary};
`;
export const Filter = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0, transparent);
  width: 100%;
  height: 100%;
`;
export const CoverImg = styled.img`
  background-position: 50%;
  height: 100%;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
`;
