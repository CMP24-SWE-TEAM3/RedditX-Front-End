import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillFileArrowUpFill, BsThreeDots } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { IoFlameOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { TiStarburstOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
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
  const [selected, setSelected] = useState("hot");

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
          <Dropdown.Item as={NavLink} to="/now">
            <span className="text">Now</span>
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="#">
            <span className="text">Today</span>
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="#">
            <span className="text">This Week</span>
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="#">
            <span className="text">This Month</span>
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="#">
            <span className="text">This Year</span>
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="#">
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
          {selected === "hot" && (
            <>
              <span className="icon">
                <IoFlameOutline />
              </span>
              <span className="text">Hot</span>
            </>
          )}
          {selected === "new" && (
            <>
              <span className="icon">
                <TiStarburstOutline />
              </span>
              <span className="text">New</span>
            </>
          )}
          {selected === "top" && (
            <>
              <span className="icon">
                <BsFillFileArrowUpFill />
              </span>
              <span className="text">Top</span>
            </>
          )}
          {selected === "rising" && (
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
            to="/hot"
            onClick={() => {
              setSelected("hot");
            }}
          >
            <span className="icon">
              <IoFlameOutline />
            </span>
            <span className="text">Hot</span>
          </Dropdown.Item>
          <Dropdown.Item
            as={NavLink}
            to="/new"
            onClick={() => {
              setSelected("new");
            }}
          >
            <span className="icon">
              <TiStarburstOutline />
            </span>
            <span className="text">New</span>
          </Dropdown.Item>
          <Dropdown.Item
            as={NavLink}
            to="/top"
            onClick={() => {
              setSelected("top");
            }}
          >
            <span className="icon">
              <BsFillFileArrowUpFill />
            </span>
            <span className="text">Top</span>
          </Dropdown.Item>
          <Dropdown.Item
            as={NavLink}
            to="/rising"
            onClick={() => {
              setSelected("rising");
            }}
          >
            <span className="icon">
              <HiTrendingUp />
            </span>
            <span className="text">Rising</span>
          </Dropdown.Item>
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
            to="/hot"
            className="icon hot"
            onClick={() => {
              setSelected("hot");
            }}
          >
            <span className="fire-icon">
              <IoFlameOutline />
            </span>
            <span className="fire-txt">Hot</span>
          </NavLink>
          <NavLink
            to="/new"
            className="icon new"
            onClick={() => {
              setSelected("new");
            }}
          >
            <span className="fire-icon">
              <TiStarburstOutline />
            </span>
            <span className="fire-txt">New</span>
          </NavLink>
          <NavLink
            to="/top"
            className="icon top"
            onClick={() => {
              setSelected("top");
            }}
          >
            <span className="fire-icon">
              <BsFillFileArrowUpFill />
            </span>
            <span className="fire-txt">Top</span>
          </NavLink>
        </InnerContainer>
        <DateDiv>{<ChooseDate />}</DateDiv>
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
      </>
    );
  };

  return (
    <Container>
      <Nav />
      <DropNav />
      <DropDateDiv>
        <ChooseDate />
      </DropDateDiv>
    </Container>
  );
};

export default CategoryBar;
