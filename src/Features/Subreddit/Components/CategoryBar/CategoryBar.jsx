// import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillFileArrowUpFill, BsThreeDots } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { IoFlameOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { TiStarburstOutline } from "react-icons/ti";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  DateDiv,
  DotsDropdown,
  DropDateDiv,
  InnerContainer,
  StyledDrop,
} from "./CategoryBar.styled";

/**
 * - Category bar to choose category of posts
 *
 * @returns {React.Component}
 */
const CategoryBar = () => {
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

  /**
   *
   * @returns {React.Component} drop down menu of date of top
   */
  const ChooseDate = () => {
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

  /**
   * - A dropdown nav elements
   *
   * @returns {React.Component}
   */
  const DropNav = () => {
    return (
      <StyledDrop>
        <Dropdown.Toggle>
          {top === "hot" && (
            <>
              <span className="icon">
                <IoFlameOutline />
              </span>
              <span className="text">Hot</span>
            </>
          )}
          {top === "new" && (
            <>
              <span className="icon">
                <TiStarburstOutline />
              </span>
              <span className="text">New</span>
            </>
          )}
          {top === "top" && (
            <>
              <span className="icon">
                <BsFillFileArrowUpFill />
              </span>
              <span className="text">Top</span>
            </>
          )}
          {top === "rising" && false && (
            <>
              <span className="icon">
                <HiTrendingUp />
              </span>
              <span className="text">Rising</span>
            </>
          )}
          <span className="arrow">
            <RiArrowDownSLine />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            as={NavLink}
            to="hot"
          >
            <span className="icon">
              <IoFlameOutline />
            </span>
            <span className="text">Hot</span>
          </Dropdown.Item>
          <Dropdown.Item
            as={NavLink}
            to="new"
          >
            <span className="icon">
              <TiStarburstOutline />
            </span>
            <span className="text">New</span>
          </Dropdown.Item>
          <Dropdown.Item
            as={NavLink}
            to="top"
          >
            <span className="icon">
              <BsFillFileArrowUpFill />
            </span>
            <span className="text">Top</span>
          </Dropdown.Item>
          {false && (
            <Dropdown.Item
              as={NavLink}
              to="rising"
            >
              <span className="icon">
                <HiTrendingUp />
              </span>
              <span className="text">Rising</span>
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </StyledDrop>
    );
  };

  /**
   * - horizontal navbar
   *
   * @returns {React.Component}
   */
  const Nav = () => {
    return (
      <>
        <InnerContainer>
          <NavLink
            to="hot"
            className={top ? "icon hot" : "icon hot active"}  
          >
            <span className="fire-icon">
              <IoFlameOutline />
            </span>
            <span className="fire-txt">Hot</span>
          </NavLink>
          <NavLink
            to="new"
            className="icon new"
          >
            <span className="fire-icon">
              <TiStarburstOutline />
            </span>
            <span className="fire-txt">New</span>
          </NavLink>
          <NavLink
            to="top"
            className="icon top"
          >
            <span className="fire-icon">
              <BsFillFileArrowUpFill />
            </span>
            <span className="fire-txt">Top</span>
          </NavLink>
        </InnerContainer>
        {top && top === "top" && (
          <DateDiv>
            <ChooseDate />
          </DateDiv>
        )}
        {false && (
          <DotsDropdown>
            <Dropdown.Toggle>
              <span>
                <BsThreeDots />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={NavLink}>
                <span className="icon">
                  <HiTrendingUp />
                </span>
                <span className="text">Rising</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </DotsDropdown>
        )}
      </>
    );
  };

  return (
    <Container>
      <Nav />
      <DropNav />
      {top && top === "top" && (
        <DropDateDiv>
          <ChooseDate />
        </DropDateDiv>
      )}
    </Container>
  );
};

export default CategoryBar;
