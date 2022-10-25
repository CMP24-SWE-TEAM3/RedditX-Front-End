import { useState } from "react";
import logo from "../../Assets/download.jpg";
import { Container } from "./CommunityCardItem.styled";
const CommunityCardItem = () => {
  const [btnContent, setstate] = useState("Join");
  function clickHandler(e) {
    e.preventDefault();
    if (btnContent === "Join") {
      setstate("Joined");
    } else {
      setstate("Join");
    }
  }
  function mouseEnterHandler() {
    if (btnContent === "Joined") {
      setstate("Leave");
    }
  }
  function MouseLeaveHandler() {
    if (btnContent === "Leave") {
      setstate("Joined");
    }
  }
  return (
    <Container>
      <a href="https://www.reddit.com/">
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
      </a>
    </Container>
  );
};

export default CommunityCardItem;
