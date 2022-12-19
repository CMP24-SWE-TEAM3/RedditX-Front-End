import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
`;

export const InnerContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  border-radius: 5px 5px 4px 4px;
  overflow: visible;
  word-wrap: break-word;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 12px;
`;

export const BackgroundContainer = styled.div`
  background-color: #33a8ff /*${({ theme }) => theme.color.secondary}*/;
  border-radius: 4px 4px 0 0;
  height: 94px;
  left: 1px;
  position: absolute;
  top: 1px;
  width: calc(100% - 2px);
`;

export const SettingsLink = styled(Link)`
  display: inline-block;
  padding: 4px;
  position: absolute;
  right: 12px;
  top: 102px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const AvatarContainer = styled.div`
  height: 160px;
  width: 125px;
  text-align: center;
  position: relative;
  margin: auto;

  img {
    height: 160px;
    z-index: 1;
    position: relative;
  }
`;

export const UserName = styled.h1`
  text-align: center;
  margin: 4px 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: ${({ theme }) => theme.color.primary};
`;

export const UsernameLink = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.color.muted};
  margin-top: 4px;
  margin-bottom: 4px;
  /* ${({ display }) => (display ? "" : "cursor: text;")} */
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.muted};
  }
`;

export const UsernameSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.color.muted};
  margin-top: 4px;
  margin-bottom: 4px;
  /* ${({ display }) => (display ? "" : "cursor: text;")} */
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.muted};
  }
`;

export const KarmaCakeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const KarmaContainer = styled.div`
  cursor: default;
  flex: 1 1 50%;
  margin-bottom: 12px;
`;

export const KarmaTitle = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
`;

export const KarmaNo = styled.div`
  align-items: center;
  display: flex;
  margin-top: 2px;

  span.number {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: ${({ theme }) => theme.color.muted};
    margin-left: 4px;
  }

  span.icon {
    color: #24a0ed;
    font-size: 12px;
    width: 12px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1 1 50%;
`;

export const LinkButton = styled(Link)`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  color: ${({ theme }) => theme.background.primary};
  fill: ${({ theme }) => theme.background.primary};
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 70px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme.background.hover_background_button_blue};
    color: ${({ theme }) => theme.background.primary};
  }
`;

export const MoreOptionsContainer = styled.div`
  margin-top: 12px;
`;

export const MoreOptionsButton = styled.button`
  &.right {
    margin-left: auto;
    font-size: 14px;
  }

  &.left {
    font-size: 12px;
  }
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.secondary};
  fill: ${({ theme }) => theme.color.secondary};
  background: transparent;
  font-family: "Noto Sans", Arial, sans-serif;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 70px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  width: auto;

  &:hover {
    background-color: #ececec;
  }
`;
