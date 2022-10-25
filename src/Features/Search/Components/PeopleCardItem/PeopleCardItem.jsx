import { Container } from "./PeopleCardItem.styled";
import { useState } from "react";
import logo from "../../Assets/download.jpg";
const PeopleCardItem = () => {
  const [btnContent, setstate] = useState("Follow");
  /**
   * If the button content is "Follow", then set the state to "Following", otherwise set the state to
   * "Follow".
   */

  function clickHandler(e) {
    e.preventDefault();
    if (btnContent === "Follow") {
      setstate("Following");
    } else {
      setstate("Follow");
    }
  }
  function mouseEnterHandler() {
    if (btnContent === "Following") {
      setstate("Unfollow");
    }
  }
  function MouseLeaveHandler() {
    if (btnContent === "Unfollow") {
      setstate("Following");
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
