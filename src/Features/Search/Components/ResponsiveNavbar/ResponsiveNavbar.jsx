import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { StyledDropdown } from "./ResponsiveNavbar.styled";
/**
 * Component that  Main Links component but in responsive form.
 *
 * @Component
 * @returns {React.Component}
 */
const ResponsiveNavbar = () => {
  const pathname = window.location.pathname;
  const firstTwo = pathname.substring(1);
  const secondTwo = firstTwo.charAt(0).toUpperCase() + firstTwo.slice(1);
  const [Title, setTitle] = useState(secondTwo);
  // const [Title, setTitle] = useState(props.act);

  useEffect(() => {
    // console.log(props.act);
    const pathname = window.location.pathname;
    const firstTwo = pathname.substring(1);
    const secondTwo = firstTwo.charAt(0).toUpperCase() + firstTwo.slice(1);
    setTitle(secondTwo);
    return () => {};
  }, []);
  return (
    <StyledDropdown
      id="dropdown-basic-button"
      title={Title}
      variant={"transparent"}
      size="md"
    >
      <Dropdown.Item
        as={NavLink}
        to="/posts"
        onClick={() => {
          setTitle("Posts");
        }}
      >
        Posts
      </Dropdown.Item>
      <Dropdown.Item
        as={NavLink}
        to="/comments"
        onClick={() => {
          setTitle("Comments");
        }}
      >
        Comments
      </Dropdown.Item>
      <Dropdown.Item
        as={NavLink}
        to="/communities"
        onClick={() => {
          setTitle("Communities");
        }}
      >
        Communities
      </Dropdown.Item>
      <Dropdown.Item
        as={NavLink}
        to="/people"
        onClick={() => {
          setTitle("People");
        }}
      >
        People
      </Dropdown.Item>
    </StyledDropdown>
  );
};

export default ResponsiveNavbar;
