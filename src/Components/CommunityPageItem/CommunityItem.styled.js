import { Link } from "react-router-dom";
import styled from "styled-components";

export const CommContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: row nowrap;
  margin-bottom: 16px;
`;
export const CommImage = styled.img`
  background-color: rgb(51, 51, 53);
  flex: 0 0 40px;
  height: 40px;
  margin-right: 12px;
  width: 40px;
  border-radius: 100%;
  vertical-align: middle;
`;
export const CommContent = styled.div`
  flex: 1 1 100%;
  margin-right: 12px;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  & a {
    width: 100%;
    color: inherit;
    text-decoration: none;
  }
`;
export const CommunityName = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme }) => theme.color.titleText_of_link};
`;
export const MemLayout = styled.div`
  display: flex;
  padding-top: 2px;
  align-items: center;
`;
export const MemContent = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  padding-right: 4px;
  color: ${({ theme }) => theme.color.muted};
`;
export const Discrepion = styled.div`
  font-family: Noto Sans, Arial, sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  max-height: 54px;
  display: -webkit-inline-box;
  -webkit-line-clamp: 3;
  white-space: normal;
  -webkit-box-orient: vertical;
  padding-top: 4px;
  width: 100%;
  max-width: 468px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray};
`;
export const Visit = styled(Link)`
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  padding: 8px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary} !important;
`;
export const BtnJoin = styled.button`
  align-items: center;
  display: flex;
  padding: 2px 12px;
  width: auto;
  position: relative;
  /* background-color: ${({ theme }) => theme.color.link}; */
  background-color: ${({ theme, active }) =>
    active ? theme.color.baseButtonColor : theme.color.link};

  /* ${(props) => (props.active ? "darkred" : "limegreen")} */
  border: 1px solid
    ${({ theme, active }) => (!active ? "transparent" : theme.color.link)};
  color: ${({ theme, active }) =>
    !active ? theme.color.baseButtonColor : theme.color.link};
  fill: ${({ theme, active }) =>
    !active ? theme.color.baseButtonColor : theme.color.link};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  border-radius: 9999px;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  /* ${(props) =>
    props.active && {
      background: `${({ theme }) => theme.color.secondary} !important`,

      border: `1px solid  ${({ theme }) => theme.color.secondary}`,
      //  borderRadius: '25px'
      color: `${({ theme }) => theme.color.baseButtonColor}`,
    }} */
`;
