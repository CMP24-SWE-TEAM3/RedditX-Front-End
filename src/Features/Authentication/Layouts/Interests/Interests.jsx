/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react";

import { SiReddit } from "react-icons/si";

import { IoMdArrowBack } from "react-icons/io";
import { FaRegLaughBeam } from "react-icons/fa";
import { FaRegLaughSquint } from "react-icons/fa";
import { GiTropicalFish } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { GiCardJoker } from "react-icons/gi";
import { SiHackaday } from "react-icons/si";
import { BiHistory } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { MdScience } from "react-icons/md";
import { HiNewspaper } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import { BsFilePersonFill } from "react-icons/bs";
import { BsBookHalf } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { BsStrava } from "react-icons/bs";
import { FaFootballBall } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";

import {
  AuthContainer,
  Privacy,
  AuthParagraph,
  AuthHeader,
  RedditIcon,
  Upper,
  Skip,
  InterestsContainer,
  GlobalStyles,
} from "./Interests.styled";

import InterestButton from "Features/Authentication/Components/InterestButton/InterestButton";

import Button from "Features/Authentication/Components/Button/Button";

/**
 *  Gender component that is used in AfterSignUp Component
 * @param {Array} interests Array of the interests of the user
 * @param {Function} setInterests Function to set the interests of the user
 * @param {Function} setGenderScreen Function to set the state of genderScreen
 * @param {Function} setInterestsScreen Function to set the state of interestsScreen
 * @returns {React.Component}  Gender component that is used in AfterSignUp Component
 */

const Interests = ({
  interests,
  setInterests,
  setGenderScreen,
  setInterestsScreen,
  setPhotoUploadScreen,
}) => {
  /**
   * state to know the interests greater than 3
   */
  const [valid, setValid] = useState(false);

  /**
   * Function to set the gender of the user and go to the next screen
   * @param {String} gender The Gender of the user
   */
  const addInterest = (interest) => {
    let temp = [...interests];

    const index = temp.indexOf(interest);
    if (index > -1) {
      // only splice array when item is found
      temp.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      temp.push(interest);
    }
    setValid(temp.length > 2);
    setInterests(temp);
    console.log(temp);
  };

  const nextScreen = () => {
    setGenderScreen(false);
    setPhotoUploadScreen(true);
    setInterestsScreen(false);
  };
  return (
    <>
      {
        <AuthContainer>
          <GlobalStyles></GlobalStyles>
          <Upper>
            <Skip
              onClick={() => {
                setInterestsScreen(false);
                setPhotoUploadScreen(false);
                setGenderScreen(true);
              }}
            >
              <IoMdArrowBack size={24} />
            </Skip>
            <RedditIcon>
              <span>
                <SiReddit size={60} color={"red"}></SiReddit>
              </span>
            </RedditIcon>
          </Upper>
          <AuthHeader>Interests</AuthHeader>
          <AuthParagraph>
            Pick 3 or more things you'd like to see in your home feed.
          </AuthParagraph>
          <InterestsContainer>
            <InterestButton selected={interests.includes("Funny")} onClick={() => addInterest("Funny")}>
              <FaRegLaughBeam color="orange" />
              Funny
            </InterestButton>
            <InterestButton selected={interests.includes("Jokes")} onClick={() => addInterest("Jokes")}>
              <FaRegLaughSquint color="orange" />
              Jokes
            </InterestButton>
            <InterestButton selected={interests.includes("Interesting")} onClick={() => addInterest("Interesting")}>
              <FaGamepad color="red" />
              Interesting
            </InterestButton>
            <InterestButton selected={interests.includes("Memes")} onClick={() => addInterest("Memes")}>
              <GiCardJoker color="purple" />
              Memes
            </InterestButton>
            <InterestButton selected={interests.includes("Life hacks")} onClick={() => addInterest("Life hacks")}>
              <SiHackaday color="red" />
              Life hacks
            </InterestButton>
            <InterestButton selected={interests.includes("Nature")} onClick={() => addInterest("Nature")}>
              <GiFruitTree color="green" /> Nature
            </InterestButton>
            <InterestButton selected={interests.includes("History")} onClick={() => addInterest("History")}>
              <BiHistory color="blue" />
              History
            </InterestButton>
            <InterestButton selected={interests.includes("Tech")} onClick={() => addInterest("Tech")}>
              <CiMobile3 color="#055160" /> Tech
            </InterestButton>
            <InterestButton selected={interests.includes("Science")} onClick={() => addInterest("Science")}>
              <MdScience color="orange" />
              Science
            </InterestButton>
            <InterestButton selected={interests.includes("News")} onClick={() => addInterest("News")}>
              <HiNewspaper color={"gray"} /> News
            </InterestButton>
            <InterestButton selected={interests.includes("Career")} onClick={() => addInterest("Career")}>
              <BsFilePersonFill color="blue" /> Career
            </InterestButton>
            <InterestButton selected={interests.includes("Books")} onClick={() => addInterest("Books")}>
              <BsBookHalf color="brown" />
              Books
            </InterestButton>
            <InterestButton selected={interests.includes("Programming")} onClick={() => addInterest("Programming")}>
              <MdComputer color="red" />
              Programming
            </InterestButton>
            <InterestButton selected={interests.includes("Travel")} onClick={() => addInterest("Travel")}>
              <BsStrava color="green" />
              Travel
            </InterestButton>
            <InterestButton selected={interests.includes("Fishing")} onClick={() => addInterest("Fishing")}>
              <GiTropicalFish color="blue" />
              Fishing
            </InterestButton>
            <InterestButton selected={interests.includes("Sports")} onClick={() => addInterest("Sports")}>
              <FaFootballBall color="brown" /> Sports
            </InterestButton>
            <InterestButton selected={interests.includes("Fitness")} onClick={() => addInterest("Fitness")}>
              <IoMdFitness color="black" /> Fitness
            </InterestButton>
            <InterestButton selected={interests.includes("Cars")} onClick={() => addInterest("Cars")}>
              <AiFillCar color="red" />
              Cars
            </InterestButton>
          </InterestsContainer>
          <Button onClick={nextScreen} disabled={!(interests.length > 2)} valid={(interests.length > 2)}>
            Continue
          </Button>
        </AuthContainer>
      }
    </>
  );
};

export default Interests;
