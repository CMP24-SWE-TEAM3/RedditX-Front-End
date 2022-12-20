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
  /* height: 160px; */
  height: fit-content;
  width: 125px;
  text-align: center;
  position: relative;
  margin: -3px;
`;

export const UserName = styled.h1`
  text-align: center;
  margin: 7px 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: ${({ theme }) => theme.color.primary};
  width: fit-content;
  margin-right: auto;
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
  width: fit-content;
  margin-right: auto;
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
  width: fit-content;
  margin-right: auto;
`;

export const KarmaCakeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
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

export const HeaderImages = styled.h3`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.color.muted};
  margin-bottom: 32px;
  padding-bottom: 6px;
`;

export const ImageContent = styled.div`
  align-items: flex-start;
  margin-top: 12px;
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
export const ImageContentInner = styled.div`
  display: flex;
  height: 100px;
`;
export const ImageProf = styled.div`
  /* border: 2px solid #fff; */
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  margin: 0 12px 0 0;
  width: 120px;
  position: relative;
`;
export const ImageLabel = styled.label`
  cursor: pointer;
  display: inline;
`;
export const ImageSpan = styled.span`
  height: 100%;
  width: 100%;
`;
export const ImageRelative = styled.div`
  height: 100%;
  position: relative;
`;
export const ImageRelativeInner = styled.div`
  border-radius: 4px;
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const ImageModel = styled.div`
  background: ${({ theme }) => theme.lineColor.primary};
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const ImageExact = styled.div`
  background: ${({ theme }) => theme.lineColor.primary};
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 8px;
  /* z-index: -1; */
  & img {
    width: 100%;
    transform-origin: bottom center;
    display: block;
    /* transform: scale(1.3); */
    border: 2px solid #fff;
    border-radius: 8px;
  }
`;
export const IconDiv = styled.div`
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  bottom: 8px;
  display: flex;
  height: 36px;
  justify-content: center;
  right: 8px;
  width: 36px;
  border: 1px solid ${({ theme }) => theme.color.link};
  background-color: ${({ theme }) => theme.background.primary};
  /* z-index: 1; */
  & span {
    color: ${({ theme }) => theme.color.link};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
`;
export const ImageSelected = styled.img`
  border-radius: 4px;
  object-fit: cover;
  object-position: top;
  text-indent: -9999px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const UserAboutContainer = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const FollowersLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  * {
    cursor: pointer;
  }
`;

export const BlockedButton = styled.button`
  position: relative;
  background-color: #ff4500;
  border: none;
  color: #fff;
  fill: #fff;
  align-items: center;
  border-radius: 70px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;

  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;

  :hover {
    background-color: #ff5414;
  }
`;

export const StyledFollowButton = styled.button`
  width: 100%;
  position: relative;
  background-color: ${({ theme, text }) =>
    text === "Follow" ? theme.color.secondary : theme.background.primary};
  border: ${({ theme, text }) =>
    text === "Follow" ? "none" : "1px solid" + theme.color.secondary};
  color: ${({ theme, text }) =>
    text === "Unfollow" ? theme.color.secondary : theme.background.primary};
  fill: ${({ theme, text }) =>
    text === "Unfollow" ? theme.color.secondary : theme.background.primary};
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
    background-color: ${({ theme, text }) =>
      text === "Follow"
        ? theme.background.hover_background_button_blue
        : theme.background.primary};
    /* color: ${({ theme }) => theme.background.primary}; */
  }
`;
