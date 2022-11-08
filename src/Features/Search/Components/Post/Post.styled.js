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
  /* & .post-header {
    padding: 16px 16px 8px 16px;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
  }
  & .community-info {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    flex: 0 0 auto;
  }
  & .community-info .community-image {
    border-radius: 100%;
    height: 20px;
    margin-right: 4px;

    width: 20px;
    max-width: 100%;
    display: block;
    border: 1px;
  } */
  /* & .community-info .community-name {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-decoration: none;
    vertical-align: baseline;
    display: inline;
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
  & .community-info .community-name:hover {
    text-decoration: underline;
  }
  & .break {
    font-size: 8px;
    line-height: 20px;
    margin: 0 4px;
    color: ${({ theme }) => theme.color.muted};
  } */
  /* & .posted-by {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: inherit;
  }
  & .posted-by .first {
    flex: 0 0 auto;
    margin-right: 3px;
    color: rgb(120, 124, 126);
  }
  & .posted-by .user-name {
    flex: 0 0 auto;
  } */
  /* & .posted-by .user-name a {
    color: rgb(120, 124, 126);
    margin-right: 3px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  & .posted-by .user-name a:hover {
    text-decoration: underline;
  }
  & .posted-by .time-post {
    color: rgb(120, 124, 126);
    flex: 0 0 auto;
  } */
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
    background-color: rgb(237, 239, 241);
    color: rgb(26, 26, 27);
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
    background-image: url(${(props) => props.pimage});
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
  /* & .post-footer {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 16px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: ${({ theme }) => theme.color.muted};
    display: flex;
  }
  & .vote,
  & .comments {
    display: block;
    margin-right: 12px;
  } */
`;
