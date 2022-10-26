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
  background-color: ${({ theme }) => theme.background.primary};
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
  background-color: ${({ theme }) => theme.background.header};
  border-bottom: thin solid ${({ theme }) => theme.background.header};
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
  color: ${({ theme }) => theme.color.primary};
`;

export const CommunityHeaderSpan = styled.span`
  color: ${({ theme }) => theme.color.muted};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const CommunityOl = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;
