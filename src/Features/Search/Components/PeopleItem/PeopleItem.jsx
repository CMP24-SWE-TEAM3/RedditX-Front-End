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
const PeopleItem = () => {
  const [btnContent, setstate] = useState("Follow");
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
