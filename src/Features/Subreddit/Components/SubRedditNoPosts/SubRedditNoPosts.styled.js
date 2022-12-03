import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: fit-content;
  min-height: 880px;
  text-align: center;
`;

export const FakePostsContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  background: none;
  opacity: 0.4;
  /* height: fit-content; */
`;

export const FakePostContainer = styled.div`
  padding-left: 40px;
  overflow: hidden;
  position: relative;
  backface-visibility: hidden;
  transform: translateZ(0);
  border: thin solid #ccc;
  margin-bottom: -1px;
  z-index: 0;
  background-color: rgba(255, 255, 255, 0.8);
  color: #878a8c;
  height: 88px;
`;

export const ArrowContainer = styled.div`
  width: 40px;
  border-left: 4px solid transparent;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 8px 4px 8px 0;
  position: absolute;
  top: 0;
`;
export const ArrowInnerContainer = styled.div`
  align-items: center;
  display: flex;
  fill: inherit;
  flex-direction: column;
  text-align: center;
`;

export const Icon = styled.span`
  display: inline-block;
  overflow: hidden;
  height: 24px;
  width: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #878a8c;
  vertical-align: middle;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  position: relative;
`;

export const Space = styled.div`
  border-radius: 4px;
  height: 16px;
  margin: 1.5px 0;
  width: 16px;
`;

export const AddPostContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
`;

export const AddPostInnerContainer = styled.div`
  width: 80%;
  margin: 80px auto;
`;

export const NoPost = styled.div`
  color: #1c1c1c;
  font-weight: 500;
  margin: 16px;
  font-size: 18px;
  line-height: 22px;
`;

export const BeFirst = styled.div`
  color: #1c1c1c;
  font-weight: 500;
  margin: 16px;
  font-size: 14px;
  line-height: 18px;
`;

export const AddPostButton = styled(Link)`
  display: flex;
  margin: 16px auto;
  width: 200px;
  position: relative;
  background-color: #0079d3;
  text-decoration: none;
  border: none;
  color: #fff;
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;

  :hover{
    background-color: #1483d6;
    color: #fff;
  }
`;
