// import Components
import React from "react";
import { OffcanvasBody } from "./SideBar.styled";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineContainer } from "react-icons/ai";
import { ButtonStyled, OpenSide } from "./SideBar.styled";
import DropDownItem from "Components/DropDownItem/DropDownItem";
import { GrFormPrevious } from "react-icons/gr";

/**
 * Component that displays a sidebar which includes a dropdown menu in it
 * @returns {React.Component}
 */
const SideBar = ({ showButton, showSideBar, setShowSideBar }) => {
  const handleClose = () => setShowSideBar(false);
  const handleShow = () => {
    setShowSideBar(true);
  };

  return (
    <>
      {showButton && (
        <ButtonStyled Styled onClick={handleShow}>
          <OpenSide id={"side-bar-action"}>
            <span>
              <AiOutlineContainer />
            </span>
            <span>
              <GrFormPrevious />
            </span>
          </OpenSide>
        </ButtonStyled>
      )}

      <OffcanvasBody
        id={"left-sidebar"}
        show={showSideBar}
        onHide={handleClose}
        className={"mt-5"}
        backdrop={false}
      >
        <Offcanvas.Body>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title />
          </Offcanvas.Header>
          <DropDownItem />
        </Offcanvas.Body>
      </OffcanvasBody>
    </>
  );
};

export default SideBar;
