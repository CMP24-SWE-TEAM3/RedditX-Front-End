// imports
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { DropDownLeftStyled } from "./DropDownLeft.styled";
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
  const dropdownMenuRef = useRef(null);
  const toggleDropdownRef = useRef(null);
  const dropDownItemRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    if (!show && showSideBar) {
      console.log("hereee");
      return;
    }
    console.log("baraa");
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
        <div className={"all-drop"}>
          <div className={"home-ico"}>
            <span>
              <AiFillHome />
            </span>
            <span>
              <h6>Home</h6>
            </span>
          </div>
          <SideBar
            showButton={show}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        </div>
        <span className={"down-form"}>
          <GrFormDown />
        </span>
      </Dropdown.Toggle>
      {
        <DropDownMenu
          dropDownItemRef={dropDownItemRef}
          dropdownMenuRef={dropdownMenuRef}
          show={show}
        />
      }
    </DropDownLeftStyled>
  );
};
export default DropDownLeft;
