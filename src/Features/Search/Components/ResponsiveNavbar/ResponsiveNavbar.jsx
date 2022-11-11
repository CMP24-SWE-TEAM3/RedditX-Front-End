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
  const secondTwo = firstTwo.charAt(7).toUpperCase() + firstTwo.slice(8);
  const [Title, setTitle] = useState(secondTwo);
  // const [Title, setTitle] = useState(props.act);

  useEffect(() => {
    // console.log(props.act);
    const pathname = window.location.pathname;
    console.log(pathname);
    const firstTwo = pathname.substring(1);
    const secondTwo = firstTwo.charAt(7).toUpperCase() + firstTwo.slice(8);
    setTitle(secondTwo);
    return () => {};
  }, [pathname]);
  return (
    <StyledDropdown
      id="dropdown-basic-button"
      title={Title}
      variant={"transparent"}
      size="md"
    >
      <Dropdown.Item
        as={NavLink}
        to="/search/posts"
        onClick={() => {
          setTitle("Posts");
        }}
      >
        Posts
      </Dropdown.Item>
      <Dropdown.Item
        as={NavLink}
        to="/search/comments"
        onClick={() => {
          setTitle("Comments");
        }}
      >
        Comments
      </Dropdown.Item>
      <Dropdown.Item
        as={NavLink}
        to="/search/communities"
        onClick={() => {
          setTitle("Communities");
        }}
      >
        Communities
      </Dropdown.Item>
      <Dropdown.Item
        as={NavLink}
        to="/search/people"
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
