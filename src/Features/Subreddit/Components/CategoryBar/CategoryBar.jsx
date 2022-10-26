import { BsFillFileArrowUpFill, BsThreeDots } from "react-icons/bs";
import { IoFlameOutline } from "react-icons/io5";
import { TiStarburstOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { Container, Dots, InnerContainer } from "./CategoryBar.styled";

const CategoryBar = () => {
  return (
    <Container>
      <InnerContainer>
        <NavLink to="/" className="icon">
          <span className="fire-icon">
            <IoFlameOutline />
          </span>
          <span className="fire-txt">Hot</span>
        </NavLink>
        <NavLink to="/sleep" className="icon">
          <span className="fire-icon">
            <TiStarburstOutline />
          </span>
          <span className="fire-txt">New</span>
        </NavLink>
        <NavLink to="/nap" className="icon">
          <span className="fire-icon">
            <BsFillFileArrowUpFill />
          </span>
          <span className="fire-txt">Top</span>
        </NavLink>
      </InnerContainer>
      <Dots>
        <div>
          <button>
            <span><BsThreeDots /></span>
          </button>
        </div>
        <div className="hidden" >
          
        </div>
      </Dots>
    </Container>
  );
};

export default CategoryBar;
