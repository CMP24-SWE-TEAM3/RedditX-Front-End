import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";
import { StyledDrop } from "./ChooseDate.styled";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

/**
 *
 * @returns {React.Component} drop down menu of date of top
 */
const ChooseDate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const time = queryParams.get("t");
  const url = location.pathname;
  const top = url.split("/")[3];
  // console.log(top);

  function selectDateHandler(e) {
    const text = e.target.innerText;
    if (text === "Now") navigate("top/?t=hour");
    else if (text === "Today") navigate("top/?t=day");
    else if (text === "This Week") navigate("top/?t=week");
    else if (text === "This Month") navigate("top/?t=month");
    else if (text === "This Year") navigate("top/?t=year");
    else navigate("top/?t=all");
  }

  return (
    <StyledDrop style={{ display: "flex" }}>
      <Dropdown.Toggle>
        <span className="text">
          {time
            ? time === "hour"
              ? "Now"
              : time === "day"
              ? "Today"
              : time === "week"
              ? "This Week"
              : time === "month"
              ? "This Month"
              : time === "year"
              ? "This Year"
              : time === "all"
              ? "All Time"
              : "Today"
            : "Today"}
        </span>
        <span className="arrow">
          <RiArrowDownSLine />
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          as="button"
          onClick={selectDateHandler}
          className={time ? (time === "hour" ? "active" : "") : ""}
        >
          <span className="text">Now</span>
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={selectDateHandler}
          className={time ? (time === "day" ? "active" : "") : "active"}
        >
          <span className="text">Today</span>
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={selectDateHandler}
          className={time ? (time === "week" ? "active" : "") : ""}
        >
          <span className="text">This Week</span>
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={selectDateHandler}
          className={time ? (time === "month" ? "active" : "") : ""}
        >
          <span className="text">This Month</span>
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={selectDateHandler}
          className={time ? (time === "year" ? "active" : "") : ""}
        >
          <span className="text">This Year</span>
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={selectDateHandler}
          className={time ? (time === "all" ? "active" : "") : ""}
        >
          <span className="text">All Time</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </StyledDrop>
  );
};
export default ChooseDate;
