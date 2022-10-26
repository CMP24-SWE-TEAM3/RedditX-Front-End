import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  color: #1a1a1b;
  fill: #1a1a1b;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: visible;
  word-wrap: break-word;
`;

export const AboutCommunity = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  background-color: #0079d3;
  border-radius: 3px 3px 0 0;
  color: #fff;
  display: flex;
  fill: #fff;
  padding: 0 12px 12px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 0 0;

  h2 {
    display: inline;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    text-transform: none;
  }
`;

export const ModTools = styled.div`
  margin: auto 0 auto auto;
  padding-top: 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;

  a.mod-tools {
    color: #fff;
    border-radius: 2px;
    display: inline-block;
    padding: 4px;
    letter-spacing: 0.5px;
    word-wrap: break-word;
    text-decoration: none;
    vertical-align: baseline;
  }

  span {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 10px;
    vertical-align: middle;
    width: 20px;
    display: inline-block;
    margin-right: 4px;
  }
`;

export const Dots = styled.button`
  border-radius: 2px;
  height: 24px;
  padding: 0 2px 0 4px;
  vertical-align: middle;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;

  span {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  max-height: none;
  padding: 12px;
`;
export const AddDescription = styled.div`
  transition: all 0.1s linear 0s;
  display: block;
  background-color: #f6f7f8;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 12px;
  margin-top: 8px;
  border: 1px solid #dae0e6;
  cursor: pointer;

  div {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    color: #0079d3;
  }

  :hover{
    border: 1px solid #0079d3;
  }
`;
