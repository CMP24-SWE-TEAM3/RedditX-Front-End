import React from "react";
import CommunitySideCard from "../CommunitySideCard/CommunityCard"
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
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect } from "react";
import fetchRandomCommunities from "Features/Subreddit/Services/fetchRandomCommunities";
import { useAuth } from "Features/Authentication/Contexts/Authentication";


/**
 * Component that contains the right section of the community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
 const RightSection = () => {
  const auth = useAuth();

  // Fetch communities
  const [communityList, error, loading, fetchFunction] = useFetchFunction();

  useEffect(()=>{
      fetchRandomCommunities(fetchFunction, auth);
  },[])

  

  return (
    <RightSectionContainer>
      <RightSectionStylingDiv>
        <FirstBlock>
          <CommunitySideCard communityList={communityList.slice(0,5)}/>
        </FirstBlock>
        <RightSectionSticky>
          <SecondBlockWithBrowse>
            <SecondBlock>
              <CommunitySideCard communityList={communityList.slice(0,5)}/>
            </SecondBlock>
            <Browse>
              <BrowseH3>Browse Communities A-Z</BrowseH3>
              <LettersContainer>
                <Letters to = {'/index-page/A'}>a</Letters>
                <Letters to = {'/index-page/B'}>b</Letters>
                <Letters to = {'/index-page/C'}>c</Letters>
                <Letters to = {'/index-page/D'}>d</Letters>
                <Letters to = {'/index-page/E'}>e</Letters>
                <Letters to = {'/index-page/F'}>f</Letters>
                <Letters to = {'/index-page/G'}>g</Letters>
                <Letters to = {'/index-page/H'}>h</Letters>
                <Letters to = {'/index-page/I'}>i</Letters>
                <Letters to = {'/index-page/J'}>j</Letters>
                <Letters to = {'/index-page/K'}>k</Letters>
                <Letters to = {'/index-page/L'}>l</Letters>
                <Letters to = {'/index-page/M'}>m</Letters>
                <Letters to = {'/index-page/N'}>n</Letters>
                <Letters to = {'/index-page/O'}>o</Letters>
                <Letters to = {'/index-page/P'}>p</Letters>
                <Letters to = {'/index-page/Q'}>q</Letters>
                <Letters to = {'/index-page/R'}>r</Letters>
                <Letters to = {'/index-page/S'}>s</Letters>
                <Letters to = {'/index-page/T'}>t</Letters>
                <Letters to = {'/index-page/U'}>u</Letters>
                <Letters to = {'/index-page/V'}>v</Letters>
                <Letters to = {'/index-page/W'}>w</Letters>
                <Letters to = {'/index-page/X'}>x</Letters>
                <Letters to = {'/index-page/Y'}>y</Letters>
                <Letters to = {'/index-page/Z'}>z</Letters>
                <Letters to = {'/index-page/Non Literal'}>#</Letters>
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
export default RightSection;