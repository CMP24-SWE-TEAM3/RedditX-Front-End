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
  Dots,
  InnerContainer,
  Rising,
  StyledDrop
} from "./CategoryBar.styled";

/**
 * - Category bar to choose category of posts
 * 
 * @returns {React.Component} CreatePost component
 */
const CategoryBar = () => {
  const [selected, setSelected] = useState("hot");
  const [showRise, setShowRise] = useState(false);

  /**
   * - A dropdown nav elements
   * 
   * @returns {React.Component} CreatePost component
   */
  function DropNav() {
    return (
      <StyledDrop>
        <Dropdown.Toggle id="dropdown-basic">
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
            to="/hi"
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
            to="/hi"
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
            to="/hi"
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
  }

  /**
   * - horizontal navbar
   * 
   * @returns {React.Component} CreatePost component
   */
  const Nav = () => {
    return (
      <>
        <InnerContainer>
          <NavLink
            to="/hot"
            className="icon"
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
            to="/sleep"
            className="icon"
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
            to="/nap"
            className="icon"
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
        <Dots>
          <div>
            <button
              onClick={() => {
                setShowRise((prev) => !prev);
              }}
            >
              <span>
                <BsThreeDots />
              </span>
            </button>
          </div>
        </Dots>
        {false && (
          <Rising tabIndex="0">
            <NavLink
              autoFocus={showRise}
              to="#"
              onClick={() => {
                setShowRise(false);
              }}
              onBlur={() => {
                setShowRise(false);
              }}
            >
              <span className="icon">
                <HiTrendingUp />
              </span>
              <span className="text">Rising</span>
            </NavLink>
          </Rising>
        )}
      </>
    );
  };

  return (
    <Container>
      <Nav />
      <DropNav />
    </Container>
  );
};

export default CategoryBar;
