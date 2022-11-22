import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CommunityContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  transition: 0.3s;
  border-radius: 4px;
  display: flex;
  margin: 12px auto 64px;
  max-width: 88%;
  width: 986px;

  @media screen and (max-width: 768px) {
      max-width: 100%;
  }
`;

export const AllCommunities = styled.div`
  flex: none;
  padding: 16px;
  width: 100%;
`;

export const CommunityHeader = styled.div`
`;

export const CommunityH1 = styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
`;


export const ContentDiv = styled.div`
  border-top: solid ${({ theme }) => theme.lineColor.primary} 1px;
  transition: 0.3s;
  display: flex;
  flex-wrap: wrap;
  margin: 16px -8px;
  padding: 16px 0 24px;

  @media screen and (max-width: 768px) {
    border-top: none;
    padding: 0;
    margin: 0;
  }

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const ContentItem = styled.div`
  width: 25%;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    width: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 33%;
  }
`;

export const ContentA = styled(NavLink)`
  // font-family: IBMPlexSans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  display: inline-block;
  max-width: 100%;
  // overflow: hidden;
  padding: 0 8px;
  // text-overflow: ellipsis;
  text-decoration: none;
  color: ${({theme})=>theme.color.secondary};
  transition: 0.3s;

  &:hover {
    color: ${({theme})=>theme.color.btnHover};
  }

  @media screen and (max-width: 768px) {
    margin: 20px;
    padding: 0;
  }
`;
