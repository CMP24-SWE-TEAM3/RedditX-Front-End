import { Container } from "./PeopleCardItem.styled";
import { useState } from "react";
import logo from "../../Assets/download.jpg";
/**
 * Component that contains the PeopleCardItem and manage the state of the button Follow.
 *
 * @Component
 * @returns {React.Component}
 */
const PeopleCardItem = () => {
  const [btnContent, setBtnContent] = useState("Follow");

  /**
   * it is the function that handle the state of the button when click on it.
   *
   * @param {Object} e it is an object which i can preventDefault and not redirect to the link
   */
  function clickHandler(e) {
    e.preventDefault();
    if (btnContent === "Follow") {
      setBtnContent("Following");
    } else {
      setBtnContent("Follow");
    }
  }

  /**
   * it is the function that handle the state of the button when mouseEnter on it.
   *
   */
  function mouseEnterHandler() {
    if (btnContent === "Following") {
      setBtnContent("Unfollow");
    }
  }

  /**
   * it is the function that handle the state of the button when MouseLeave on it.
   *
   */
  function MouseLeaveHandler() {
    if (btnContent === "Unfollow") {
      setBtnContent("Following");
    }
  }
  return (
    <Container>
      <a href="https://www.reddit.com/">
        <div className="item">
          <img src={logo} alt="userImage" />
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
      </a>
    </Container>
  );
};

export default PeopleCardItem;
