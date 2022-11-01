import styled from "styled-components";
export const Container = styled.a`
  margin-bottom: 0;
  border-radius: 4px 4px 0 0;
  text-decoration: none;
  padding: 16px;
  border: thin solid ${({ theme }) => theme.lineColor.PostBorder};
  display: flex;
  flex-direction: column;
  margin-top: -1px;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 380px) {
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Img = styled.img`
  background-color: rgb(55, 60, 63);
  border-radius: 100%;
  vertical-align: middle;
  font-size: 36px;
  height: 36px;
  max-height: 36px;
  max-width: 36px;
  overflow: hidden;
  width: 36px;
  line-height: normal;
  flex-shrink: 0;
  @media (max-width: 380px) {
    margin-bottom: 5px;
  }
`;
export const CommunityInfo = styled.div`
  flex-grow: 1;
  padding: 0 8px;
  overflow: hidden;
  overflow-wrap: break-word;
  @media (max-width: 380px) {
    margin: auto;
  }
`;
export const CommunityMainInfo = styled.div`
  display: flex;
  align-items: baseline;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
  @media (max-width: 380px) {
    margin-bottom: 5px;
  }
`;
export const CommunityTitle = styled.h6`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme }) => theme.color.titleText_of_link};
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 380px) {
    margin: auto;
  }
`;
export const CommunityMembers = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
  span {
    color: ${({ theme }) => theme.color.muted};
    font-size: 6px;
    line-height: 20px;
    margin: 0 4px;
  }
  @media (max-width: 380px) {
    margin: auto;
    margin: auto;
    display: flex;
    align-items: center;
  }
`;
export const CommunityDescription = styled.p`
  margin: 0;
  padding: 0;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.color.muted};
  @media (max-width: 570px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 380px) {
    display: none;
  }
`;
export const BtnContainer = styled.div`
  flex-shrink: 0;
  width: 88px;
`;
export const Button = styled.button`
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
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;
  background-color: ${({ theme }) => theme.background.active};
  color: ${({ theme }) => theme.color.secondary};
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.background.card_hover};
  }
`;
