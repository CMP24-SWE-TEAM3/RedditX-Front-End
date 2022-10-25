import { useState } from "react";
import {
  BtnContainer,
  Button,
  CommunityDescription,
  CommunityInfo,
  CommunityMainInfo,
  CommunityMembers,
  CommunityTitle,
  Container,
  Flex,
  Img,
} from "./CommunityItem.styled";
import CommImage from "../../Assets/CommunityImage.png";
const CommunityItem = () => {
  const [btnContent, setstate] = useState("Join");
  function clickHandler(e) {
    e.preventDefault();
    if (btnContent === "Join") {
      setstate("Joined");
    } else {
      setstate("Join");
    }
    // window.scrollTo(0, 0);
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
    <Container href="https://www.w3schools.com">
      <Flex>
        <Img src={CommImage} alt="Subreddit Icon" />
        <CommunityInfo>
          <CommunityMainInfo>
            <CommunityTitle>r/GermanWW2photos</CommunityTitle>
            <CommunityMembers>
              <span>•</span>25.1k Members
            </CommunityMembers>
          </CommunityMainInfo>
          <CommunityDescription>
            A subreddit dedicated to German photos and portraits from the period
            of 1933-1946 (dates are flexible)
          </CommunityDescription>
        </CommunityInfo>
        <BtnContainer>
          <Button
            onClick={clickHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={MouseLeaveHandler}
          >
            {btnContent}
          </Button>
        </BtnContainer>
      </Flex>
    </Container>
  );
};

export default CommunityItem;
