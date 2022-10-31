import styled from "styled-components";

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

  :hover {
    border: 1px solid #0079d3;
  }
`;

export const BirthDay = styled.div`
  margin-top: 12px;

  .cake-day {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    flex-flow: row nowrap;
  }

  .icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
    margin: -2px 8px 0 0;
  }

  .text {
    color: #7c7c7c;
  }
`;

export const Private = styled.div`
  margin-top: 8px;

  div.container {
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
  span.icon {
    height: 16px;
    padding-right: 4px;
    vertical-align: top;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    width: 20px;
  }

  span.text {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;
