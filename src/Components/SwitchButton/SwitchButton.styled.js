import styled from "styled-components";
import Switch from "react-switch";

export const ReactSwitch = styled(Switch)`
  //vertical-align: middle;
  //margin-left: 4px;
  display:flex;
  position: relative;
  
  .react-switch-bg{
    height: 21px !important;
    width: 35px !important;
    //transform: translateX(1px) !important;
    
  }
  .react-switch-handle{
    height: 19.5px !important;
    width: 19.5px !important;
    transform: translateX(14px) !important;
  }

`