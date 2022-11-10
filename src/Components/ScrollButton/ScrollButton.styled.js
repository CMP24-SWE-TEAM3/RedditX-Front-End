import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: ${({show}) => show ? 'inline' : 'none'};

  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  border: none;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  width: auto;
  cursor: pointer;
  color: ${({theme}) => theme.background.primary};
  //border-color: ${({theme}) => theme.color.secondary};
  background-color: ${({theme}) => theme.color.secondary};
  //width: 112px;

  :hover, :active {
    background-color: ${({theme}) => theme.background.hover_background_button_blue};
  }
`
