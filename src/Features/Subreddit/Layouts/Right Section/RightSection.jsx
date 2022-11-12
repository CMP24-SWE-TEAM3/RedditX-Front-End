import React, {use} from "react";
import TopCommunities from "../CommunitySideCard/CommunityCard"
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
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
} from "./RightSection.styled";
import { CommunityContainer } from "../CommunitySideCard/CommunityCard.styled";
import { CommunityOl } from "../Communities Container/CommunitiesContainer.styled";
import CommunityCardItem from "../../Components/CommunitySideCardItem/CommunityCardItem";
import {Link} from 'react-router-dom';




/**
 * Component that contains the right section of the community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
export default function RightSection() {
  const [communityList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    //  /api/random-category/
    url: "http://localhost:8000/feedback",
    requestConfig: {
        headers: {
            "Content-Language": "en-US",
        },
    },
});

const com = communityList.map((community, index) => {
    return (
        <li>
            <CommunityCardItem 
            key={community.id}
            title = {community.title} 
            community={community.name} 
            index = {index+1}/>
        </li>
    );
});

  return (
    <RightSectionContainer>
      <RightSectionStylingDiv>
        <FirstBlock>
          <TopCommunities />
        </FirstBlock>
        <RightSectionSticky>
          <SecondBlockWithBrowse>
            <SecondBlock>
              <TopCommunities />
            </SecondBlock>
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
              <BackTopBtn id="backTop-btn" href="#">Back to Top</BackTopBtn>
            </BackTop>
          </SecondBlockWithBrowse>
        </RightSectionSticky>
      </RightSectionStylingDiv>
    </RightSectionContainer>
  );
}
