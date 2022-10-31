import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/download.jpg";
import { Container } from "./CommunityCardItem.styled";
/**
 * Component that contains the CommunityCardItem and manage the state of the button join.
 *
 * @Component
 * @returns {React.Component}
 */
const CommunityCardItem = () => {
  const [btnContent, setBtnContent] = useState("Join");

  /**
   * it is the function that handle the state of the button when click on it.
   *
   * @param {Object} e it is an object which i can preventDefault and not redirect to the link
   */
  function clickHandler(e) {
    e.preventDefault();
    if (btnContent === "Join") {
      setBtnContent("Joined");
    } else {
      setBtnContent("Join");
    }
  }
  /**
   * it is the function that handle the state of the button when mouseEnter on it.
   *
   */
  function mouseEnterHandler() {
    if (btnContent === "Joined") {
      setBtnContent("Leave");
    }
  }
  /**
   * it is the function that handle the state of the button when MouseLeave on it.
   *
   */
  function MouseLeaveHandler() {
    if (btnContent === "Leave") {
      setBtnContent("Joined");
    }
  }
  return (
    <Container>
      <Link href="https://www.reddit.com/">
        <div className="item">
          <img src={logo} alt="" />
          <div className="info">
            <div className="info2">
              <h6>r/politics</h6>
              <p>8.2m Members</p>
            </div>
          </div>
          <div className="button">
            <button
              onClick={clickHandler}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={MouseLeaveHandler}
            >
              {btnContent}
            </button>
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default CommunityCardItem;
