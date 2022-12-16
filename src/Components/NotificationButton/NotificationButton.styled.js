import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
  .popover {
    background-color: ${({ theme }) => theme.background.primary};
    border-radius: 4px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    overflow-y: unset;
    overflow: unset;
    width: 375px;
    max-width: 375px;
  }

  .popover-header {
    background-color: ${({ theme }) => theme.background.primary};
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-bottom: none !important;
  }

  .setting {
    margin-left: 8px;
    :hover {
      background-color: ${({ theme }) => theme.background.hover_background};
    }
  }

  // body of notification
  .popover-body {
    max-height: 250px;
    background-color: ${({ theme }) => theme.background.primary};
    overflow: hidden;
    overflow-y: auto;
    padding: 0;
    transition: max-height 0.3s ease-out;
  }
`;
export const SpanContainer = styled.span`
  flex: 1 0;
`;
export const Info = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-family: Noto Sans, Arial, sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary};
`;
export const Word = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 12px;
`;
export const RightSide = styled.span`
  align-items: center;
  display: flex;
  overflow: hidden;
`;
export const Message = styled.span`
  border-right: 1px solid ${({ theme }) => theme.background.primary};
  padding-right: 8px;
  :hover {
    background-color: ${({ theme }) => theme.background.hover_background};
  }

  a {
    text-decoration: none;
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray};

    :hover {
      text-decoration: none !important;
    }
  }
`;
export const DotBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.gray} !important;
  cursor: pointer;
  padding: initial;
  border: none;
  :hover {
    background-color: ${({ theme }) => theme.background.hover_background};
  }
`;
export const Symbol = styled.i`
  color: ${({ theme }) => theme.color.gray};
  font-size: 20px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  vertical-align: middle;
  width: 20px;
`;
export const Content = styled.div`
  position: relative;

  img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
    background-color: ${({ theme }) => theme.background.hover_background};
    display: block;
    object-fit: cover;
  }
`;
export const ContentSymbol = styled.i`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  a {
    display: flex;
    padding: 16px;
    text-decoration: none;
  }
`;
export const InfoChild = styled.span`
  font-family: Noto Sans, Arial, sans-serif;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray};
  word-break: break-word;
  line-height: 18px;
  max-height: 54px;
  -webkit-line-clamp: 3;
`;
export const Time = styled.span`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray};
  line-height: 19px;
  display: flex;
`;
export const Dot = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin: 0 5px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.gray};

  :hover {
    background-color: ${({ theme }) => theme.background.post_background};
  }
`;
export const Child = styled.span`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;
export const SubChild = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;
export const ImageContainer = styled.span`
  padding-right: 8px;
  position: relative;
`;
export const PopContainer = styled.div`
  margin: 0 16px;
`;
export const Footer = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.background.post_background};
  border-radius: 0 0 4px 4px;
  display: flex;
  height: 49px;
  justify-content: center;
  padding: 0 12px;

  a {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 32px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #24a0ed;
  }
`;
