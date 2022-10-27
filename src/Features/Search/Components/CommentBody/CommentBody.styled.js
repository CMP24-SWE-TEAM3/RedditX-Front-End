import styled from "styled-components";
export const Container = styled.div`
  padding: 0 16px;
`;
export const FirstText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.titleText_of_link};
  display: inline;
  position: relative;
  text-decoration: none;
  word-break: break-word;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
export const FirstTextStyle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  display: inline;
  padding-right: 5px;
  word-wrap: break-word;
`;
export const InnerBody = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.comment};
  font-size: 14px;
  margin: 0 12px 12px;
  padding: 4px 8px 8px;
  color: ${({ theme }) => theme.color.titleText_of_link};
`;
export const InnerBodyLayout = styled.div`
  margin: 0;
  padding: 0;
  background: transparent;
  border-radius: 4px;
  position: relative;
  transition: color 0.5s, fill 0.5s, background-color 1s;
  align-items: center;
  display: flex;
`;
export const ImageAlign = styled.div`
  display: inline-block;
  flex: 0 0 auto;
  align-self: flex-start;

  a div {
    height: 20px;
    min-height: 20px;
    min-width: 20px;
    width: 20px;
    border: 0;
    margin: 10px 0 0;
    align-self: flex-start;
    font-size: 20px;
    line-height: 1;
  }
`;
export const CommentImage = styled.img`
  border-radius: 50%;
  border: none;
  color: ${({ theme }) => theme.background.primary};

  text-indent: -9999px;
  box-sizing: border-box;
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;
export const BodyContent = styled.div`
  margin-left: 8px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-sizing: border-box;
  max-width: 800px;
  width: calc(100% - 56px);
  padding: 0;
  align-self: flex-start;
`;
export const BodyContentHeader = styled.div`
  margin-top: 10px;
  margin-left: 0;
  min-height: 18px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const BodyContentHeaderLayout = styled.span`
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .break {
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    margin: 0 4px;
    color: ${({ theme }) => theme.color.muted};
  }
`;
export const CommentUserName = styled.div`
  align-self: baseline;
  div {
    display: inline-block;
    flex: 0 0 auto;
  }
  div a {
    color: ${({ theme }) => theme.color.titleText_of_link};
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
`;
export const Time = styled.a`
  align-self: baseline;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.color.muted};
  text-decoration: none;
`;
export const BodyText = styled.div`
  max-height: 300px;
  overflow: hidden;
  position: relative;
  padding: 2px 0;
  width: 100%;
  @media (max-width: 500px) {
    max-height: 270px;
  }
`;
export const BodyTextStyle = styled.div`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  word-break: break-word;
  overflow: auto;
  padding-bottom: 1px;
  margin-bottom: -1px;
  color: ${({ theme }) => theme.color.titleText_of_link};
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 20px;
    width: 100%;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0) 0,
      ${({ theme }) => theme.background.comment}
    );
  }
`;
export const BodyTextStylePlace = styled.p`
  padding: 0;
  margin: 0;
  padding: 0.8em 0 0.25em;
`;
export const GoThread = styled.a`
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin: 0 0 4px 8px;
  min-height: 0;
  padding: 0;
  text-align: left;
  background-color: unset;
  line-height: 17px;
  min-width: 32px;
  text-decoration: none;
  padding: 0 12px;
`;
