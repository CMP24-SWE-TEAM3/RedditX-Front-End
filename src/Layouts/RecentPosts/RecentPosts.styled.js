import styled from "styled-components";
import ImageCovered from "Assets/Images/cats.png";

export const Container = styled.div`
  // Container
  border: 1px solid #ccc;
  border-radius: 5px 5px 4px 4px;
  overflow: visible;
  word-wrap: break-word;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 12px;
`;
export const Content = styled.div`
  border-bottom: 2px solid #f6f7f8;
  cursor: pointer;
  display: flex;
  padding-top: 12px;
`;
export const ClearBtn = styled.button`
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
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: -10px;
  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #878a8c;
    white-space: nowrap;
  }
`;
export const Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 4px;
    max-height: 36px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const Dots = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #878a8c;
  white-space: nowrap;

  ::before {
    content: "·";
    font-weight: 700;
    margin: 0 3px;
  }
`;
export const Cover = styled.div`
  border-radius: 4px;
  display: inline-block;
  flex: 0 0 65px;
  height: 49px;
  margin-right: 7px;
  width: 65px;
`;
// header styles
export const HeadContainer = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-align: initial;
  text-transform: uppercase;
  padding-bottom: 4px;
  color: ${({ theme }) => theme.color.primary};
  div {
    display: inline;
  }
`;
export const CoverChild = styled.div`
  border-radius: 4px;
  flex: 1 1 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  vertical-align: bottom;

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
export const ImageContainer = styled.div`
  border-color: #edeff1;
  img {
    width: auto;
    background-size: cover;
  }
`;
