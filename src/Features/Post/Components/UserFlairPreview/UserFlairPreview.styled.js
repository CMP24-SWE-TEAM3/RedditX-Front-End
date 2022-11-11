import { Link } from "react-router-dom";
// ${Link} {}
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12px;
`;

export const CreatePost = styled(Link)`
  display: flex;
  /* text-align: center; */
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 16px;
  position: relative;
  background-color: #0079d3;
  border: none;
  color: #fff;

  :hover {
    background-color: #1483d6;
    color: #fff;
  }
`;

export const PreviewContainer = styled.div`
  margin-top: 12px;
`;

export const FlairPreview = styled.div`
  display: flex;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;
    border: 1px solid transparent;
    color: #0079d3;
    background: transparent;
    border-radius: 50%;
    min-height: 25px;
    min-width: 25px;
    width: auto;
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    margin-left: auto;
  }

  button:hover {
    background-color: #ececec;
  }

  span.icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    width: 20px;
  }
`;

export const UserFlairContainer = styled.div`
  display: flex;
  margin: 8px 0;
  width: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100;
`;

export const ProfilePicContainer = styled.div`
  height: 100%;
  position: relative;
`;
export const ProfilePic = styled.div`
  height: 30px;
  width: 30px;
  margin-top: 6px;
  background: #f9c112 url(${(props) => props.profile}) no-repeat center top;
  background-size: cover;
  border-radius: 50%;
`;

export const NameAndFlairContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 8px;
  min-width: 0;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: ${({ theme }) => theme.color.primary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FlairContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-top: 2px;
`;

export const Flair = styled.span`
  font-weight: 400;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 16px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: text-bottom;
  white-space: pre;
  word-break: normal;
  padding: 0 4px;
`;
