import styled from "styled-components";
export const ContainerPost = styled.div`
  color: rgb(135, 138, 140);
  cursor: pointer;
  fill: rgb(135, 138, 140);
  border-radius: 4px 4px 0 0;
  margin-top: 0;
  overflow: hidden;
  position: relative;
  border: thin solid ${({ theme }) => theme.lineColor.PostBorder};
  max-width: 100%;
  &:hover {
    border: thin solid ${({ theme }) => theme.lineColor.PostHoverBorder};
  }
  & .post-outline {
    position: relative;
    background-color: ${({ theme }) => theme.background.primary};
    /* height: 100px; */
  }

  & .post-body {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 420px) {
    & .post-body {
      flex-wrap: wrap;
    }
  }
  & .post-body-content {
    display: inline;
    position: relative;
    text-decoration: none;
    word-break: break-word;
  }
  & .post-body-content a {
    color: inherit;
    text-decoration: none;
  }
  & .post-body-content a div {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    display: inline;
    padding-right: 5px;
    word-wrap: break-word;
    color: ${({ theme }) => theme.color.titleText_of_link};
    text-decoration: none;
    @media (max-width: 570px) {
      font-size: 12px;
    }
  }
  & .post-body-content a div p {
    display: inline;
    text-decoration: none;
  }
  & .post-body-content .flair {
    background-color: ${(props) => props.flairBackgroundColor};
    color: ${(props) => props.flairColor};
    border-radius: 20px;
    padding: 2px 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    white-space: pre;
    word-break: normal;
    margin-left: 0;
    display: inline-block;
    margin-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .post-image {
    padding-left: 8px;
    @media (max-width: 570px) {
      margin: auto;
    }
    @media (max-width: 420px) {
      margin: 0;
    }
  }
  @media (min-width: 478px) {
    & .post-image {
      display: flex;
      flex: 0 0 138px;
      height: 98px;
    }
  }
  @media (min-width: 414px) {
    & .post-image {
      display: flex;
      flex: 0 0 138px;
      height: 98px;
    }
  }
  & .post-image .img {
    flex: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }
  & .post-image .img a {
    text-decoration: inherit;
  }
  & .post-image .img a .image {
    /* background-image: url(${(props) => props.pimage}); */
    border-color: #0079d3;
    transition: filter 0.5s;
    height: 98px;
    width: 138px;
    border: none;
    border-radius: 4px;
    flex: 1;
    background-position: 50% top;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
`;
