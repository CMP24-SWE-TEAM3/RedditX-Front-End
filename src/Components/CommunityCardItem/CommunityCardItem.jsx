// Imports
import { useState } from "react";
import { BASE_URL } from "API/axios";
import {
  Caret,
  CommunityNameChild,
  CommunityNameContainer,
  Container, HeaderLine,
  Image,
  Item,
  JoinBtn,
  JoinContainer,
  Number,
} from "./CommunityCardItem.styled";
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

/**
 * Component that  shows the names of communities up-to-date.
 * @returns {Component.React}
 */
const CommunityCardItem = ({ communityId, community, srIcon }) => {
  const [btnContent, setBtnContent] = useState("Join");

  const clickHandler = (e) => {
    e.preventDefault();
    if (btnContent === "Join") {
      setBtnContent("Joined");
    } else {
      setBtnContent("Join");
    }
  };

  const mouseEnterHandler = () => {
    if (btnContent === "Joined") {
      setBtnContent("Leave");
    }
  };

  const MouseLeaveHandler = () => {
    if (btnContent === "Leave") {
      setBtnContent("Joined");
    }
  };

  return (
      <>
    <Container>
      <Link to={"/subreddit/*"}>
        <Item>
          <Number>{communityId}</Number>
          <Caret>
            <FaAngleUp />
          </Caret>
          <Image
            crossOrigin="anonymous"
            src={`${BASE_URL}/subreddits/files/${srIcon}`}
            alt="community-icon"
          />
          <CommunityNameContainer>
            <CommunityNameChild>
              <h6>r/{community}</h6>
            </CommunityNameChild>
          </CommunityNameContainer>
          <JoinContainer>
            <JoinBtn
              onClick={clickHandler}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={MouseLeaveHandler}
            >
              {btnContent}
            </JoinBtn>
          </JoinContainer>
        </Item>
      </Link>
    </Container>
  <HeaderLine/>
      </>
  );
};

export default CommunityCardItem;
