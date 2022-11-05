import styled from "styled-components";

export const AdvertiseButtonStyled = styled.button`
  width: 110.34px;
  margin-left: 8px;
  margin-right: 8px;
  height: 32px;
  border-radius: 50px;
  flex-direction: row;
  min-width: 32px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.color.primary};
  background-color: ${({theme}) => theme.background.muted};

  &:hover {
    background-color: #d4d7d9
  }

`