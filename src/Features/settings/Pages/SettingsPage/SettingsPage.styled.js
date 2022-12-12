import styled from "styled-components";
export const ContainerSettings = styled.div`
  transition: margin-top 0.3s ease;
  padding-bottom: 40px;
  min-height: calc(100vh - 88px);
  margin-left: calc(100vw - 100%);
`;
export const InnerContainerSettings = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.background.primary};

  position: relative;
`;
export const Title = styled.h3`
  /* margin: 0;
  padding: 0; */
  max-width: 1200px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  padding: 16px 20px 20px;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.titleText_of_link};
  fill: #fff;
`;
export const SettingsNav = styled.div`
  max-width: 1200px;
  background-color: ${({ theme }) => theme.background.primary};
  margin: 0 auto;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  a {
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    border-bottom: none;
    color: var(--newCommunityTheme-metaText);
    cursor: default;
    display: inline-block;
    line-height: unset;
    margin-right: 8px;
    padding: 15px 12px 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.muted};
    cursor: pointer;
  }
  a.active {
    color: ${({ theme }) => theme.color.titleText_of_link};
    border-bottom: 3px solid ${({ theme }) => theme.color.link};
  }
  a:hover {
    color: ${({ theme }) => theme.color.titleText_of_link};
    /* border-bottom: 3px solid ${({ theme }) => theme.color.link}; */
  }
`;
export const TabContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
`;
export const TabInnerContainer = styled.div`
  max-width: 688px;
  flex: 1 1 auto;
`;
