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
  const sort = queryParams.get("sort");
  // const url = location.pathname;
  // const top = url.split("/")[3];
  // console.log(top);

  function selectDateHandler(e) {
    const text = e.target.innerText;
    if (text === "Now") navigate("?sort=top&t=hour");
    else if (text === "Today") navigate("?sort=top&t=day");
    else if (text === "This Week") navigate("?sort=top&t=week");
    else if (text === "This Month") navigate("?sort=top&t=month");
    else if (text === "This Year") navigate("?sort=top&t=year");
    else navigate("?sort=top&t=all");
  }

  function selectSortHandler(e) {
    // console.log(e.target);
    const text = e.currentTarget.innerText;
    if (text === "Hot") navigate("?sort=hot");
    else if (text === "New") navigate("?sort=new");
    else if (text === "Top") navigate("?sort=top");
    else navigate("?sort=hot");
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
          {(sort === "hot" || !sort ) && (
            <>
              <span className="icon">
                <IoFlameOutline />
              </span>
              <span className="text">Hot</span>
            </>
          )}
          {sort === "new" && (
            <>
              <span className="icon">
                <TiStarburstOutline />
              </span>
              <span className="text">New</span>
            </>
          )}
          {sort === "top" && (
            <>
              <span className="icon">
                <BsFillFileArrowUpFill />
              </span>
              <span className="text">Top</span>
            </>
          )}
          {sort === "rising" && false && (
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
            as="button"
            className={sort ? (sort === "hot" ? "active" : "") : "active"}
            onClick={selectSortHandler}
          >
            <span className="icon">
              <IoFlameOutline />
            </span>
            <span className="text">Hot</span>
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            className={sort ? (sort === "new" ? "active" : "") : ""}
            onClick={selectSortHandler}
          >
            <span className="icon">
              <TiStarburstOutline />
            </span>
            <span className="text">New</span>
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            className={sort ? (sort === "top" ? "active" : "") : ""}
            onClick={selectSortHandler}
          >
            <span className="icon">
              <BsFillFileArrowUpFill />
            </span>
            <span className="text">Top</span>
          </Dropdown.Item>
          {false && (
            <Dropdown.Item as="button" to="rising">
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
          <button
            onClick={selectSortHandler}
            className={
              sort
                ? sort === "hot"
                  ? "icon hot active"
                  : "icon hot"
                : "icon hot active"
            }
          >
            <span className="fire-icon" tabIndex="0">
              <IoFlameOutline />
            </span>
            <span className="fire-txt">Hot</span>
          </button>
          <button
            onClick={selectSortHandler}
            className={
              sort
                ? sort === "new"
                  ? "icon new active"
                  : "icon new"
                : "icon new"
            }
            tabIndex="0"
          >
            <span className="fire-icon" tabIndex="0">
              <TiStarburstOutline />
            </span>
            <span className="fire-txt">New</span>
          </button>
          <button
            onClick={selectSortHandler}
            className={
              sort
                ? sort === "top"
                  ? "icon top active"
                  : "icon top"
                : "icon top"
            }
          >
            <span className="fire-icon" tabIndex="0">
              <BsFillFileArrowUpFill />
            </span>
            <span className="fire-txt">Top</span>
          </button>
        </InnerContainer>
        {sort && sort === "top" && (
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
      {sort && sort === "top" && (
        <DropDateDiv>
          <ChooseDate />
        </DropDateDiv>
      )}
    </Container>
  );
};

export default CategoryBar;
