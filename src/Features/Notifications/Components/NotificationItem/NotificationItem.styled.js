import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineReply } from "react-icons/hi";
import Popup from "reactjs-popup";

export const ComponentDiv = styled.div`
  display: flex;
  padding: 16px;
  text-decoration: none;
  & .popup-content {
    background-color: #000 !important;
  }
`;

export const LeftDiv = styled.span`
  padding-right: 8px;
  position: relative;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  background-color: ${({ theme }) => theme.borderColor.primary};
  display: block;
  object-fit: cover;
`;

export const HeaderDiv = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  position: relative;
`;

export const HeaderSpan = styled.span``;

export const SeparateorSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
`;

export const DateSpan = styled.span`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.muted};
  line-height: 19px;
`;

export const ComponentHeader = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.primary};
  overflow-wrap: anywhere;
  font-family: Noto Sans, Arial, sans-serif;
  font-weight: 400;
`;

export const DotsButton = styled.div`
  align-items: center;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  width: 32px;
  margin-left: 10px;
  flex: 0 0 32px;

  /* Default */
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  padding: initial;

  &:hover {
    background-color: ${({ theme }) => theme.button.muted};
  }
`;

export const ComponentContent = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.muted};
  word-break: break-word;
  line-height: 18px;
  max-height: 54px;

  font-family: Noto Sans, Arial, sans-serif;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const RightDiv = styled.span`
  flex: 1 0;
`;

export const ButtonDiv = styled.a`
  position: relative;
  background-color: ${({ theme }) => theme.button.muted};
  color: ${({ theme }) => theme.color.secondary};
  fill: ${({ theme }) => theme.color.secondary};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    opacity: 0;

    &:hover {
      border-color: #24a0ed1a;
      background: #24a0ed1a;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Arrow = styled(HiOutlineReply)`
  font-size: 17px;
  height: 17px;
  line-height: 15px;
  padding-right: 8px;
`;

export const HideButton = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary};
  display: block;
  padding: 8px;
  text-align: left;
  width: 100%;
  background: transparent;
  border: none !important;
  cursor: pointer;
  &:hover {
    border: none !important;
    color: ${({ theme }) => theme.color.muted};
  }
`;
