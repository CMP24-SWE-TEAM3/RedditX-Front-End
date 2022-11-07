import styled from "styled-components";

export const Container = styled.div`
  // Container
  border: 1px solid #ccc;
  border-radius: 5px 5px 4px 4px;
  overflow: visible;
  word-wrap: break-word;
  background-color: ${({theme}) => theme.background.primary};
  padding: 12px;


  // header styles
  .header {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 12px;
    text-transform: uppercase;
    padding-bottom: 4px;
    color: ${({theme}) => theme.color.primary};

    h2 {
      display: inline;
    }
  }

  // styles of main content
  .content {
    border-bottom: 2px solid ${({theme}) => theme.background.primary};
    padding-bottom: 12px;
    cursor: pointer;
    display: flex;
    padding-top: 12px;
  }


  // styles of link's image
  .cover {
    border-radius: 4px;
    display: inline-block;
    flex: 0 0 65px;
    height: 49px;
    margin-right: 7px;
    width: 65px;
  }
 // styles of first child element 
  .child-1 {
    border-radius: 4px;
    flex: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .post-img {
    background-image: url(https://b.thumbs.redditmedia.com/3jGUS-4D8Fn3UsQf6gsFOMO_jTRG5xF8nu1r0M0m2ho.jpg);
    border-color: #EDEFF1;

    img {
      display: none;
      height: 100%;
    }
  }

  // styles of description text

  .description {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      color: ${({theme}) => theme.color.primary};
      margin-bottom: 4px;
      max-height: 36px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  // styles of likes , comments , points and hours

  .details {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #878a8c;
      white-space: nowrap;
    }
  }

  .dots {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #878a8c;
    white-space: nowrap;
  }

  .dots::before {
    content: "·";
    font-weight: 700;
    margin: 0 3px;
  }

  .but {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #878a8c;
    text-align: right;
    width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: initial;
  }
`