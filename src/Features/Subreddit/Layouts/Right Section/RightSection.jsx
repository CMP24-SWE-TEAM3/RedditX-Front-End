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
                <Letters to = {'/index-page'}>a</Letters>
                <Letters to = {'/index-page'}>b</Letters>
                <Letters to = {'/index-page'}>c</Letters>
                <Letters to = {'/index-page'}>d</Letters>
                <Letters to = {'/index-page'}>e</Letters>
                <Letters to = {'/index-page'}>f</Letters>
                <Letters to = {'/index-page'}>g</Letters>
                <Letters to = {'/index-page'}>h</Letters>
                <Letters to = {'/index-page'}>i</Letters>
                <Letters to = {'/index-page'}>j</Letters>
                <Letters to = {'/index-page'}>k</Letters>
                <Letters to = {'/index-page'}>l</Letters>
                <Letters to = {'/index-page'}>m</Letters>
                <Letters to = {'/index-page'}>n</Letters>
                <Letters to = {'/index-page'}>o</Letters>
                <Letters to = {'/index-page'}>p</Letters>
                <Letters to = {'/index-page'}>q</Letters>
                <Letters to = {'/index-page'}>r</Letters>
                <Letters to = {'/index-page'}>s</Letters>
                <Letters to = {'/index-page'}>t</Letters>
                <Letters to = {'/index-page'}>u</Letters>
                <Letters to = {'/index-page'}>v</Letters>
                <Letters to = {'/index-page'}>w</Letters>
                <Letters to = {'/index-page'}>x</Letters>
                <Letters to = {'/index-page'}>y</Letters>
                <Letters to = {'/index-page'}>z</Letters>
                <Letters to = {'/index-page'}>#</Letters>
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
