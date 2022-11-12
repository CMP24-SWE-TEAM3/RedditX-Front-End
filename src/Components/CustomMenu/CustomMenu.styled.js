import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";

export const CanvasHeader = styled(Offcanvas.Header)`
  .btn-close:focus {
    box-shadow: 0 0;
  }

  display: flex;
  justify-content: end;
  padding: 16px 20px 0;
  position: relative;
`