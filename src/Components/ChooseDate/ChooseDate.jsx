import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { StyledDrop } from "./ChooseDate.styled";

/**
 *
 * @returns {React.Component} drop down menu of date of top
 */
const ChooseDate = () => {
  return (
    <StyledDrop style={{ display: "flex" }}>
      <Dropdown.Toggle>
        <span className="text">Today</span>
        <span className="arrow">
          <RiArrowDownSLine />
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={NavLink}>
          <span className="text">Now</span>
        </Dropdown.Item>
        <Dropdown.Item as={NavLink}>
          <span className="text">Today</span>
        </Dropdown.Item>
        <Dropdown.Item as={NavLink}>
          <span className="text">This Week</span>
        </Dropdown.Item>
        <Dropdown.Item as={NavLink}>
          <span className="text">This Month</span>
        </Dropdown.Item>
        <Dropdown.Item as={NavLink}>
          <span className="text">This Year</span>
        </Dropdown.Item>
        <Dropdown.Item as={NavLink}>
          <span className="text">All Time</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </StyledDrop>
  );
};
export default ChooseDate;
