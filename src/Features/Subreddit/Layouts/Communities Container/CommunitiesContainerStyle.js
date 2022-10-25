import styled from "styled-components";

export const MainPadding = styled.div`
  padding: 20px 24px;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const AllCommunities = styled.div`
  background-color: white;
  margin: 12px 0;
  margin-top: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`;

export const CommunityHeader = styled.div`
  align-items: center;
  background-color: #f6f7f8;
  border-bottom: thin solid #f6f7f8;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  height: 40px;
  position: sticky;
  justify-content: space-between;
  padding: 0 16px;
  top: 0;
  z-index: 3;
`;

export const CommunityH3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #1c1c1c;
  margin = 0;
`;

export const CommunityHeaderSpan = styled.span`
  color: #7c7c7c;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const CommunityOl = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;
