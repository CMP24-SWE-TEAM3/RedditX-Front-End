import styled from "styled-components";
import Switch from "react-switch";

export const ReactSwitch = styled(Switch)`
  //vertical-align: middle;
  //margin-left: 4px;
  display: flex;
  position: relative;
  box-shadow: none !important;


  .react-switch-bg {
    height: 21px !important;
    width: 35px !important;
    background: ${({mode}) => mode === false ?'#dfdfdf':''} !important;
  }

  .react-switch-handle {
    height: 19.5px !important;
    width: 19.5px !important;
    transform: ${({mode}) => mode === true ? 'translateX(14px)' : 'translateX(1px) '} !important;
    transition: none !important;
    box-shadow: none !important;
  }

`