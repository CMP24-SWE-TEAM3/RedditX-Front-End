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
/**
 * Component that render the Community item Elements.
 *
 * @Component
 * @returns {React.Component}
 */
const CommunityItem = () => {
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
    // window.scrollTo(0, 0);
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
