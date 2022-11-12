import styled from "styled-components";

export const AdvertiseButtonStyled = styled.button`
  //@media (max-width: 420px) {
  //  display: none;
  //}
  @media (max-width: 600px) {
    width: fit-content;
  }
  //width: 110.34px;
  width: fit-content;
  //margin-left: 8px;
  //margin-right: 8px;
  height: 32px;
  border-radius: 50px;
  flex-direction: row;
  min-width: 32px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.color.primary};
  background-color: ${({theme}) => theme.background.muted};

  :hover {
    background-color: ${({theme}) => theme.background.muted};
  }

  span {
    padding: 3px;
    font-size: 15px;
    font-weight: 600;
  }

  span:last-child {
    @media (max-width: 770px) {
      //display: none;
    }
  }

`