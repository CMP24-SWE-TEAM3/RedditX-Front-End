import styled from "styled-components";
import { IoKey } from "react-icons/io5";
import { Link } from "react-router-dom";

export const PrivatePageContainer = styled.div`
  background-color: ${({ theme }) => theme.canvas};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const StyledKey = styled(IoKey)`
  margin: 0 auto;
  width: auto;
  fill: #898989;
  background: ${({ theme }) => theme.borderColor.secondary};
  height: 101px;
  border-radius: 100px;
  padding: 20px;
  transition: all 0.2s;
  vertical-align: middle;
`;

export const StyledHeader = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.color.primary};
  margin-top: 32px;
  margin-bottom: 20px;
`;

export const CommunityDescContainer = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.primary};
  margin-bottom: 20px;
  max-width: 880px;
  width: 455.25px;
  padding: 16px;
  h3 {
    margin-top: 0;
  }

  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
    max-width: 455.25px;
  }
`;

export const CommunityDescInnerContainer = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.color.primary};
  text-align: left;
`;

export const ModContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary};
  margin-top: 0;
  margin-bottom: 32px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: baseline;
`;

export const ReqToJoinButton = styled.button`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  margin-right: 24px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  text-align: center;
  width: auto;
  display: flex;
  justify-content: center;
  position: relative;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  fill: ${({ theme }) => theme.color.secondary};
  :hover {
    background: #d0dbe5;
  }
`;

export const MessageMod = styled(Link)`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  margin-right: 24px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  text-align: center;
  width: auto;
  display: flex;
  justify-content: center;
  position: relative;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  fill: ${({ theme }) => theme.color.secondary};
  text-decoration: none;
  :hover {
    background: #d0dbe5;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const Browse = styled(Link)`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  margin-right: 24px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  text-align: center;
  width: auto;
  display: flex;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.background.primary};
  text-decoration: none;
  :hover {
    background: ${({ theme }) =>
      theme.borderColor.hover_background_button_blue};
    color: ${({ theme }) => theme.background.primary};
  }
`;

export const PrivateFooter = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 36px 0;
  width: 476px;
`;

export const PrivateFooterInnerContainer = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme }) => theme.borderColor.primary};
  margin-top: 15px;
  text-align: center;
`;
