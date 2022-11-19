import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH1,
  ContentDiv,
  ContentItem,
  ContentA,
} from "./IndexContainer.styled";


/**
 * Component acts as a container for all communities of the Community Indexing Page
 * @Component
 * @returns {React.Component}
 */
export default function IndexContainer() {
  const {indexLetter} = useParams();
  let initial = indexLetter;

  if (indexLetter==="*") {
    initial = "A";
  }
  else if (indexLetter==="Non Literal") {
    initial = "#";
  }
  const [currLetter, setCurrLetter] = useState(indexLetter==="*"? "A": initial);

  useEffect(()=> {
    if (indexLetter==="*") {
      setCurrLetter("A");
      return;
    }
    else if (indexLetter==="Non Literal") {
      setCurrLetter("#");
      return;
    }
    setCurrLetter(indexLetter);
    console.log(currLetter);
  }, [indexLetter])

  let [communityIndex, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/index--Leaderboard",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  const communities = communityIndex.map((community) => {
    return (
        <ContentItem key = {community.id.toString()}>
          <ContentA to = {'/subreddit'}>{community.title}</ContentA>
        </ContentItem>
    );
  });
  return (
    <CommunityContainer>
      <AllCommunities>
        <CommunityHeader>
          <CommunityH1>Browse communities starting with '{currLetter}'</CommunityH1>
        </CommunityHeader>
        <ContentDiv>{communities}</ContentDiv>
      </AllCommunities>
    </CommunityContainer>
  );
}
