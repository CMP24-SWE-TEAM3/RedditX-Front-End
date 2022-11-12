import styled from "styled-components";
import web from '../../Assets/images/banner-background.png';


export const CommunityContainer = styled.div``;

export const CoverDiv = styled.div`
  color: black;
  height: 80px;
  background-position: 50%;
  text-align: left;
  background-repeat: no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  background-image: url(${web});
`;

export const GradientDiv = styled.div`
  background: linear-gradient(${({theme}) => theme.degree.gradient}deg,rgba(0,0,0,.7) 0,transparent);
  transition: 0.3s;
  width: 100%;
  height: 100%;
`;

export const LinkH2 = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  bottom: 8px;
  color: ${({theme}) => theme.color.primary};
  transition: 0.3s;
  left: 16px;
  position: absolute;

  & a {
    color: ${({theme}) => theme.color.sideBarHeader};
    transition: 0.3s;
    text-decoration: none;
  }
`;

export const BtnDiv = styled.div`
  padding: 12px;
`;

export const ViewAllBtn = styled.button`
  position: relative;
  transition: 0.3s;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  text-align: center;
  min-height: 32px;
  min-width: 32px;
  width: 100%;
  padding: 4px 16px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.btnColor.secondary};
  background-color: ${({ theme }) => theme.btnColor.backColor};
  color: ${({ theme }) => theme.btnColor.secondary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background.sideBtnHover};
    transition: 0.3s;
  }
`;