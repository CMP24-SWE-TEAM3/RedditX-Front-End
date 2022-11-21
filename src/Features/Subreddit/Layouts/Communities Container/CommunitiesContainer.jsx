

import { useParams } from "react-router-dom";
import Community from "../../Components/Community/Community";
import { useEffect, useRef, useState } from "react";

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
 * @param {object} com - array that contains all the communities of current category
 * @param {object} subscribed - array that contains all the subscribed communities
 * @returns {React.Component}
 */
 const Container = ({ com, subscribed }) => {
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

  useEffect(()=> {
    if(categoryType==="All Communities") {
      setCurrCategory("Growing");
      return;
    }
    else if (categoryType==="*") {
      setCurrCategory("Growing");
      return;
    }
    else if (categoryType==="Near You") {
      setCurrCategory("Local");
      return; 
    }
    setCurrCategory(categoryType);
  }, [categoryType])
  
  const communities = com.map((community, index) => {
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
