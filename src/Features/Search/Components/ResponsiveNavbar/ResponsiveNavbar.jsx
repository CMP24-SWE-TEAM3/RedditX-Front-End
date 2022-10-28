import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { StyledDropdown } from "./ResponsiveNavbar.styled";
const ResponsiveNavbar = () => {
  /**
   * Component that  Main Links component but in responsive form.
   *
   * @Component
   * @returns {React.Component}
   */
  return (
    <StyledDropdown
      id="dropdown-basic-button"
      title="Pages"
      variant="transparent"
      size="md"
    >
      <Dropdown.Item as={NavLink} to="/post">
        Posts
      </Dropdown.Item>
      <Dropdown.Item as={NavLink} to="/comments">
        Comments
      </Dropdown.Item>
      <Dropdown.Item as={NavLink} to="/communities">
        Communities
      </Dropdown.Item>
      <Dropdown.Item as={NavLink} to="/people">
        People
      </Dropdown.Item>
    </StyledDropdown>
  );
};

export default ResponsiveNavbar;
