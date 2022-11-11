import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const CommunityImage = styled.img`
  height: 54px;
  width: 54px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const CommunityName = styled.h6`
  font-size: 16px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
    display: inline-block;
  }
`;

export const Description = styled.p`
  font-size: 14px;
`;
