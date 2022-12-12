import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.background.primary};

  border-radius: 4px;
  overflow: visible;
  word-wrap: break-word;
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  color: ${({ theme }) => theme.color.titleText_of_link};
`;

export const HeaderContainer = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 3px 3px 0 0;
  color: ${({ theme }) => theme.color.titleText_of_link};
  display: flex;
  padding: 0 12px 12px;
`;

export const HeaderInnerContainer = styled.div`
  padding: 12px 0 0;

  h2 {
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    text-transform: none;
    display: inline;
  }
`;

export const CommunitiesContainer = styled.div`
  padding: 12px;
`;

export const CommunityContainer = styled.div`
  padding-bottom: 4px;
  display: inline-flex;
`;

export const CommunityInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommunityIconContainer = styled.div`
  flex: 0 0;
`;

export const CommunityIconInnerContainer = styled.div`
  height: 32px;
  width: 32px;
  margin-right: 8px;
`;

export const CommunityIconContent = styled.p`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.background.primary};
  display: inline-block;
  font-size: 32px;
  line-height: 20px;
  width: 33px;
  height: 33px;
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
`;

export const CommunityNameMembersContainer = styled.div`
  flex: 1 1 100%;
  width: 100%;
`;

export const CommunityNameLink = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 144px;
  color: ${({ theme }) => theme.color.titleText_of_link};
  text-decoration: none;
`;

export const CommunityMembers = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.titleText_of_link};
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
`;

export const CommunityButtonContainer = styled.div`
  flex: 0 0;
  flex-basis: 106px;
`;

export const CommunityButton = styled.button`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  color: ${({ theme }) => theme.background.primary};
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  /* background: transparent; */

  align-items: center;
  border-radius: 99px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) =>
      theme.background.hover_background_button_blue};
    color: ${({ theme }) => theme.background.primary};
  }
`;
