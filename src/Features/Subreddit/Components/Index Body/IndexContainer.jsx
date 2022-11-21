import useFetchFunction from "Hooks/useFetchFunction";
import fetchIndexedCommunities from "Features/Subreddit/Services/fetchIndexedCommunities";
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

  const [communityIndex, error, loading, indexFetchFunction] = useFetchFunction();

  useEffect(() => {
    fetchIndexedCommunities(indexFetchFunction);
  }, []); // Only re-run the effect if count changes

  const communities = communityIndex.map((community) => {
    return (
        <ContentItem key = {community.id.toString()}>
          <ContentA to = {'/subreddit'}>{community.title}</ContentA>
        </ContentItem>
    );
  });
  return !loading&& (
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
