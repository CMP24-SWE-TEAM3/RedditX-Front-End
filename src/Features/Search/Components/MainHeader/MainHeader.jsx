// import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import SafeSearch from "../SafeSearch/SafeSearch";
import { MainLinks } from "./MainHeader.styled";

const Links = () => {
  return (
    <MainLinks>
      <div className="links">
        <div className="inner-links">
          <NavLink to="/post">
            <button>Posts</button>
          </NavLink>
          <NavLink to="/comments">
            <button>Comments</button>
          </NavLink>
          <NavLink to="/communities">
            <button>Communities</button>
          </NavLink>
          <NavLink to="/people">
            <button>People</button>
          </NavLink>
        </div>
        <SafeSearch />
      </div>
    </MainLinks>
  );
};

export default Links;
