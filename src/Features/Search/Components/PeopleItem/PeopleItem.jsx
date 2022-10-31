import { useState } from "react";
import {
  BtnContainer,
  Button,
  PeopleDescription,
  PeopleInfo,
  PeopleMainInfo,
  PeopleKarma,
  PeopleTitle,
  Container,
  Flex,
  Img,
} from "./PeopleItem.styled.js";
import PeopleImage from "../../Assets/People_Image.jpg";
/**
 * Component that contains the PeopleItem and manage the state of the button Follow.
 *
 * @Component
 * @returns {React.Component}
 */
const PeopleItem = () => {
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
    <Container href="https://www.w3schools.com">
      <Flex>
        <Img src={PeopleImage} alt="People Icon" />
        <PeopleInfo>
          <PeopleMainInfo>
            <PeopleTitle>u/Rowen013</PeopleTitle>
            <PeopleKarma>
              <span>•</span>25.1k Karma
            </PeopleKarma>
          </PeopleMainInfo>
          <PeopleDescription>
            A subreddit dedicated to German photos and portraits from the period
            of 1933-1946 (dates are flexible)
          </PeopleDescription>
        </PeopleInfo>
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

export default PeopleItem;
