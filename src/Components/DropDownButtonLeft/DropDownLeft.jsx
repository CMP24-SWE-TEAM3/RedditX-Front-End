// imports
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {
  DropDownLeftStyled,
  Icon,
  Header,
  DownForm,
  DropContainer,
} from "./DropDownLeft.styled";
import { AiFillHome } from "react-icons/ai";
import DropDownMenu from "Components/DropDownMenu/DropDownMenu";
import CustomToggle from "Components/CustomToggle/CustomToggle";
import SideBar from "Components/SideBar/SideBar";
import { GrFormDown } from "react-icons/gr";

/**
 * Component that has all your accessibility and profile in drop-down list.
 *
 * @returns {React.Component}
 */

const DropDownLeft = () => {
  // use references to handle clicking out of drop-down list
  const dropdownMenuRef = useRef(null);
  const toggleDropdownRef = useRef(null);
  const dropDownItemRef = useRef(null);
  const [show, setShow] = useState(false);
  // handle toggle of drop-down and show sidebar
  const handleToggle = () => {
    if (!show && showSideBar) {
      return;
    }
    setShow(!show);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target) &&
        toggleDropdownRef.current &&
        !toggleDropdownRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownMenuRef, toggleDropdownRef, dropDownItemRef]);

  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <DropDownLeftStyled>
      <Dropdown.Toggle
        as={CustomToggle}
        id="dropdown-home"
        onClick={handleToggle}
        ref={toggleDropdownRef}
      >
        <DropContainer>
          <Icon>
            <span>
              <AiFillHome />
            </span>
            <span>
              <Header>Home</Header>
            </span>
          </Icon>
        </DropContainer>
        <div>
          <SideBar
            showButton={show}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
          <DownForm>
            <GrFormDown />
          </DownForm>
        </div>
      </Dropdown.Toggle>
      {<DropDownMenu dropdownMenuRef={dropdownMenuRef} show={show} />}
    </DropDownLeftStyled>
  );
};
export default DropDownLeft;
