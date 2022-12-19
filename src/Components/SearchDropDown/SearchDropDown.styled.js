import styled from "styled-components";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { Link } from "react-router-dom";
export const SearchDropDownStyled = styled(DropdownMenu)`
  z-index: 100;
  left: unset !important;
  margin-left: 5px;
  top: 44.5px;
  width: 40.5%;
  overflow: auto;
  border-top-width: 0;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
  max-height: 482px;
  @media (max-width: 1286px) {
    width: 15.5%;
  }
  @media (max-width: 992px) {
    display: none !important;
  }

  .dropdown-header {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
    padding-bottom: 8px;
    padding-top: 16px;
  }

  .dropdown-item {
    text-decoration: none;
    :active {
      background: none;
    }

    a {
      justify-content: space-between !important;
      text-decoration: none;
      align-items: center !important;
      display: -ms-flexbox !important;
      display: flex !important;
      padding: 12px 16px;
      white-space: pre-wrap;
    }
  }
`;
export const HeaderName = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary};
`;
export const Arrow = styled.span`
  font-size: 20px;
  font-weight: 400;
  height: 20px;
  padding-right: 9px;
  line-height: 20px;
  vertical-align: text-bottom;
  width: 20px;
  color: ${({ theme }) => theme.color.secondary};
`;
export const Description = styled.div`
  margin-left: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.color.muted};
  margin-bottom: 8px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Footer = styled.footer`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  padding-right: 4px;
  display: inline-block;
  vertical-align: top;
  flex: none;
  margin-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.muted};

  // img of link
  img {
    border-radius: 9001px;
    border: none;
    box-sizing: border-box;
    display: inline-block;
    background-color: rgb(0 121 211);
    flex: none;
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    margin-right: 4px;
    vertical-align: sub;
    width: 16px;
  }
`;
export const Aside = styled.aside`
  @media (min-width: 436px) {
    display: flex;
    flex: 0 0 96px;
    height: 72px;
  }
`;
export const LinkSide = styled.div`
  border-radius: 4px;
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  vertical-align: bottom;
`;
export const Child = styled.div`
  transition: filter 0.5s;
  height: 72px;
  width: 96px;
  flex: 1;
  position: relative;
  box-sizing: border-box;
  border: none;
  vertical-align: middle;
  border-radius: 4px;
`;
export const SubChild = styled.span`
  font-size: 20px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  vertical-align: middle;
  color: ${({ theme }) => theme.color.secondary};
  width: 20px;
  position: absolute;
  padding-top: 3px;
  padding-left: 35px;
`;
export const CommunitiesText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding: 12px 16px 0 16px;
`;
export const SubText = styled(Link)`
  padding-top: 4px;
  text-decoration: none !important;
  padding-bottom: 8px;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  :hover {
    background-color: ${({ theme }) => theme.lineColor.primary};
  }
`;
export const ImageContainer = styled.div`
  display: inline-flex;
  img {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 28px;
    width: 28px;
    border-radius: 9999px;
    box-sizing: border-box;
    display: inline-block;
    flex: none;
    vertical-align: middle;
  }
`;
export const CommunityContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-left: 8px;
  color: ${({ theme }) => theme.color.primary};
`;
export const Members = styled.div`
  margin-left: 8px;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
`;
export const FirstChild = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
`;
export const SecondChild = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
`;
export const Dot = styled.span`
  color: ${({ theme }) => theme.color.muted};
  font-weight: 500;
`;
export const Container = styled.div`
  border-top: 2px solid ${({ theme }) => theme.lineColor.primary};
  padding-bottom: 8px;
`;
export const DropMenuContainer = styled(DropdownMenu)`
  z-index: 100;
  left: 423px;
  top: 44.5px;
  width: 580px;
  overflow: auto;
  border-top-width: 0;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 482px;
  right: 0;
  border: 1px solid ${({ theme }) => theme.lineColor.primary};
  box-shadow: 0 2px 4px 0;
`;
