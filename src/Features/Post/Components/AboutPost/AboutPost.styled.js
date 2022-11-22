import styled from "styled-components";
import egyptImg from "Features/Post/Assets/Images/Backgorund-post.png";

export const AboutPostContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.background.primary};
  border-radius: 4px;
  overflow: visible;
  overflow-wrap: break-word;
  cursor: pointer;

  .content {
    max-height: none;
    padding: 12px;
    background-color: ${({ theme }) => theme.background.primary};
  }

  hr {
    background-color: ${({ theme }) => theme.color.gray};
    border: none;
    height: 1px;
    margin: 16px 0;
  }

`;

export const BackgroundImage = styled.div`
  background-color: #ea0027;
  background-size: cover;
  background-image: url(${egyptImg});
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  border-radius: 3px 3px 0 0;
  height: 34px;
  margin: -12px -12px 10px;
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;

  img {
    border-radius: 100%;
    vertical-align: middle;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 54px;
    width: 54px;
    font-size: 54px;
    line-height: 54px;
    box-sizing: border-box;
    flex: none;
    margin-right: 8px;
    background-color: rgb(0, 121, 211);
  }
`;

export const ProfileLink = styled.div`
  display: inline-block;
  vertical-align: middle;

  a {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    color: inherit;
    text-decoration: inherit;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    display: inline-block;
  }
`;

export const Paragraph = styled.div`
  margin-bottom: 8px;
  position: relative;

  :first-child {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    word-wrap: break-word;
  }
`
export const Date = styled.div`
  margin-top: 12px;
  margin-bottom: 8px;

  :first-child {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    flex-flow: row nowrap;
  }

  i {
    margin: -2px 8px 0 0;
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    width: 20px;
  }

  span {
    color: ${({ theme }) => theme.color.muted};
  }
`
export const Statistics = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 400;
    color: #747576;
    font-size: 12px;
    line-height: 16px;
    display: inline-block;
    word-break: break-word;
  }

  .top {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    display: block;
    color: ${({ theme }) => theme.color.primary};
  }

  .members {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  a {
    text-decoration: none;
  }
`
export const Online = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  :before {
    content: "●";
    margin-right: 4px;
    color: #46d160
  }
`
export const Button = styled.button`
  position: relative;
  margin-bottom: 8px;
  background-color:${({ but }) => but === "1" ? "white" : "#0079d3"};
  color: ${({ but }) => but === "1" ? "#0079d3" : "white"};
  justify-content: center;
  margin-top: 12px;
  border: 1px solid #0079d3;
  border-radius: 9999px;
  height: 30px;
  width: 100%;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;

  :hover {
    background-color: ${({ theme }) => theme.background.hoverLight};
  }
`