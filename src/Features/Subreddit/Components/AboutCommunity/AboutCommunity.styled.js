import styled from "styled-components";

export const AboutCommunityContainer = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  background-color: ${({theme})=>theme.color.secondary};
  border-radius: 3px 3px 0 0;
  color: ${({theme})=>theme.background.primary};
  display: flex;
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
  color: ${({theme})=>theme.background.primary};;

  a.mod-tools {
    color: ${({theme})=>theme.background.primary};;
    border-radius: 2px;
    display: inline-block;
    padding: 4px;
    letter-spacing: 0.5px;
    word-wrap: break-word;
    text-decoration: none;
    vertical-align: baseline;
    :hover {
      background-color: #026fc0;
    }
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

  :hover {
    background-color: #026fc0;
  }

  span {
    font-size: 20px;
    font-weight: 400;
  }
`;
