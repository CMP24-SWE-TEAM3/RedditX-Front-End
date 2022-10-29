import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { StyledDropdown } from "./ResponsiveNavbar.styled";
const ResponsiveNavbar = (props) => {
  const [Title, setTitle] = useState(props.act);

  /**
   * Component that  Main Links component but in responsive form.
   *
   * @Component
   * @returns {React.Component}
   */
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
