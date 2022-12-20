// import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import SafeSearch from "../SafeSearch/SafeSearch";
import { MainLinks } from "./MainHeader.styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
/**
 * Component that contains the Main Links.
 *
 * @Component
 * @returns {React.Component}
 */
const Links = ({ ActiveLink, setActiveLink }) => {
  const ctx = useContext(SearchContext);
  const navigate = useNavigate();
  console.log(ctx);
  return (
    <MainLinks>
      <div className="links">
        <div className="inner-links">
          <NavLink
            to={`/search/posts?query=${ctx.word}&destination=${ctx.community}`}
          >
            <button
              onClick={() => {
                setActiveLink("Posts");
              }}
            >
              Posts
            </button>
          </NavLink>
          <NavLink
            to={`/search/comments?query=${ctx.word}&destination=${ctx.community}`}
          >
            <button
              onClick={() => {
                setActiveLink("Comments");
              }}
            >
              Comments
            </button>
          </NavLink>
          {!ctx.isSubreddit && (
            <NavLink
              to={`/search/communities?query=${ctx.word}&destination=${ctx.community}`}
            >
              <button
                onClick={() => {
                  setActiveLink("Communities");
                }}
              >
                Communities
              </button>
            </NavLink>
          )}
          {!ctx.isSubreddit && (
            <NavLink
              to={`/search/people?query=${ctx.word}&destination=${ctx.community}`}
            >
              <button
                onClick={() => {
                  setActiveLink("People");
                }}
              >
                People
              </button>
            </NavLink>
          )}
        </div>
        <ResponsiveNavbar act={ActiveLink} />
        {ctx.isSubreddit && (
          <div className="isSub">
            <Link
              className="isSubLink"
              onClick={(e) => {
                e.preventDefault();
                ctx.isSubredditHandler(false);
                ctx.communityHandler("aaa");
                navigate(`/search/posts?query=${ctx.word}`);
              }}
            >
              <span className="isSubSpan1">Show results from</span>
              <p className="isSubP">all of Reddit</p>
              <span className="isSubSpan2">
                <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
        )}
        <SafeSearch />
      </div>
    </MainLinks>
  );
};

export default Links;
