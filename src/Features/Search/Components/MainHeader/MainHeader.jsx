// import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import SafeSearch from "../SafeSearch/SafeSearch";
import { MainLinks } from "./MainHeader.styled";
import { useState } from "react";
/**
 * Component that contains the Main Links.
 *
 * @Component
 * @returns {React.Component}
 */
const Links = ({ ActiveLink, setActiveLink }) => {
  return (
    <MainLinks>
      <div className="links">
        <div className="inner-links">
          <NavLink to="/search/posts">
            <button
              onClick={() => {
                setActiveLink("Posts");
              }}
            >
              Posts
            </button>
          </NavLink>
          <NavLink to="/search/comments">
            <button
              onClick={() => {
                setActiveLink("Comments");
              }}
            >
              Comments
            </button>
          </NavLink>
          <NavLink to="/search/communities">
            <button
              onClick={() => {
                setActiveLink("Communities");
              }}
            >
              Communities
            </button>
          </NavLink>
          <NavLink to="/search/people">
            <button
              onClick={() => {
                setActiveLink("People");
              }}
            >
              People
            </button>
          </NavLink>
        </div>
        <ResponsiveNavbar act={ActiveLink} />
        <SafeSearch />
      </div>
    </MainLinks>
  );
};

export default Links;
