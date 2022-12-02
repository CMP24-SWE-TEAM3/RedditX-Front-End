

import { useParams } from "react-router-dom";
import Community from "../../Components/Community/Community";
import { useEffect, useRef, useState } from "react";
import fetchCommunities from "Features/Subreddit/Services/fetchCommunities";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH3,
  CommunityOl,
} from "./CommunitiesContainer.styled";

/*TODO: const*/

/**
 * Component acts as a container for all communities of the community leaderboard page
 *
 * @Component
 * @param {object} subscribed - array that contains all the subscribed communities
 * @returns {React.Component}
 */
 const Container = ({subscribed }) => {
  const [communitiesList, error, loading, fetchFunction] = useFetchFunction();
  const auth = useAuth();
  const {categoryType} = useParams();
  let initial = categoryType;
  if(categoryType==="All Communities") {
    initial = "Growing";
  }
  else if (categoryType==="*") {
    initial = "Growing";
  }
  else if (categoryType==="Near You") {
    initial = "Local";
  }
  const [currCategory, setCurrCategory] = useState(categoryType==="*"? "Growing": initial);
  const [prevCategory, setPrevCategory] = useState();

  useEffect(()=> {
    
    if(categoryType==="All Communities") {
      setCurrCategory("Growing");
      if(currCategory!==prevCategory) {
        setPrevCategory(currCategory);
        fetchCommunities(fetchFunction, auth, currCategory);
      }
        
      return;
    }
    else if (categoryType==="*") {
      setCurrCategory("Growing");
      if(currCategory!==prevCategory) {
        setPrevCategory(currCategory);
        fetchCommunities(fetchFunction, auth, currCategory);
      }
      return;
    }
    else if (categoryType==="Near You") {
      setCurrCategory("Local");
      if(currCategory!==prevCategory) {
        setPrevCategory(currCategory);
        fetchCommunities(fetchFunction, auth, currCategory);
      }
      return; 
    }
    setCurrCategory(categoryType);
    if(currCategory!==prevCategory) {
      setPrevCategory(currCategory);
      fetchCommunities(fetchFunction, auth, currCategory);
    }
  }, [categoryType, currCategory])
  
  const communities = communitiesList.map((community, index) => {
    return (
      <li key={community.id.toString()}>
        <Community
          id={community.id}
          index={index + 1}
          img={community.coverImg}
          title={community.title}
          isJoined={subscribed.find((element) => {
            return element.id === community.id;
          })}
          members={community.stats.members}
          description={community.description}
          rankChange={community.rankChange}
        />
      </li>
    );
  });
  return (
    <CommunityContainer>
      <AllCommunities>
        <CommunityHeader>
          <CommunityH3> Today's Top {currCategory} Communities</CommunityH3>
        </CommunityHeader>
        <CommunityOl>{communities}</CommunityOl>
      </AllCommunities>
    </CommunityContainer>
  );
}

export default Container;
