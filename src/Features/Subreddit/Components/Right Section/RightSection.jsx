import React from "react";
import {
  RightSectionContainer,
  RightSectionStylingDiv,
  RightSectionSticky,
  FirstBlock,
  SecondBlockWithBrowse,
  SecondBlock,
  Browse,
  BrowseH3,
  Letters,
  BackTop,
  RightSectionBtns,
  BackTopBtn,
  LettersContainer,
} from "./RightSectionStyle";



/**
 * Component that contains the right section of the community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
export default function RightSection() {
  return (
    <RightSectionContainer>
      <RightSectionStylingDiv>
        <RightSectionSticky>
          <SecondBlockWithBrowse>
            <Browse>
              <BrowseH3>Browse Communities A-Z</BrowseH3>
              <LettersContainer>
                <Letters href="#">a</Letters>
                <Letters href="#">b</Letters>
                <Letters href="#">c</Letters>
                <Letters href="#">d</Letters>
                <Letters href="#">e</Letters>
                <Letters href="#">f</Letters>
                <Letters href="#">g</Letters>
                <Letters href="#">h</Letters>
                <Letters href="#">i</Letters>
                <Letters href="#">j</Letters>
                <Letters href="#">k</Letters>
                <Letters href="#">l</Letters>
                <Letters href="#">m</Letters>
                <Letters href="#">n</Letters>
                <Letters href="#">o</Letters>
                <Letters href="#">p</Letters>
                <Letters href="#">q</Letters>
                <Letters href="#">r</Letters>
                <Letters href="#">s</Letters>
                <Letters href="#">t</Letters>
                <Letters href="#">u</Letters>
                <Letters href="#">v</Letters>
                <Letters href="#">w</Letters>
                <Letters href="#">x</Letters>
                <Letters href="#">y</Letters>
                <Letters href="#">z</Letters>
                <Letters href="#">#</Letters>
              </LettersContainer>
            </Browse>
            <BackTop>
              <BackTopBtn href="#">Back to Top</BackTopBtn>
            </BackTop>
          </SecondBlockWithBrowse>
        </RightSectionSticky>
      </RightSectionStylingDiv>
    </RightSectionContainer>
  );
}
